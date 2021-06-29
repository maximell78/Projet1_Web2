class Message {
    constructor(name, email, message) {
      this.name = name;
      this.email = email;
      this.message = message;
    }
  
    getMessage() {
      return `Envoye par : {this.name} email: {this.email} message: {this.message}`;
    }
  
    create(message) {
      return new Promise(function (resolve, reject) {
        console.log("create " + message);
        if (!message.name) message.name = "Anonymous";
        if (message.message) {
          resolve(message);
        } else {
          const error = "le message est vide";
          reject(error);
        }
      });
    }
  }
  
  module.exports = Message;
  