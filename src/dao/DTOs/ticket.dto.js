import config from "../../config/config.js";

export default class TicketDTO {
    constructor(purchase, productsAccepted, productsRejected) {
      this.purchase = purchase;
      this.productsAccepted = productsAccepted;
      this.productsRejected = productsRejected;
    }

  

    generateListProducts() {
      let html = `<tr><td><b>${this.purchase.purchaser}  | </td><td>${this.purchase.purchaserMarket} | </td><td>${this.purchase.purchaserMarketAddress}</b></td></tr><br>`;
      const currentDate = new Date().toLocaleDateString();
      this.productsAccepted.forEach((product) => {
        html += `<tr><td><b>Producto:</b> ${product.title}  |</td><td><b> Precio:</b> $${product.price}  |</td><td><b> Cantidad:</b> ${product.quantity}  |</td></tr><br>`;
      });
    
      html += `<tr><td><b>Total:$${this.purchase.amount} | Fecha: ${currentDate} </b></td></tr></table>`;
      return html;
    }

    getEmail(){
      const ticketEmail= {
        from: "Ecommerce Martin Neme",
        to: this.purchase.purchaser, 
        subject: "Ticket", 
        html:this.generateListProducts()
      }

      return ticketEmail;
    }

    getEmailAdmin(){
      const ticketEmailAdmin= {
        from: "Ecommerce - Pedido",
        to: config.adminEmail, 
        subject: "Ecommerce - Pedido", 
        html:this.generateListProducts()
      }

      return ticketEmailAdmin;
    }
  }
