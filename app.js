function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
}

const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');

console.log(car1);
console.log(car2);

car1.drive();
car2.reverse();

class Phone {
    constructor(brand, color, CPU, ROM) {
        this.brand = brand;
        this.color = color;
        this.CPU = CPU;
        this.ROM = ROM;
    }

    up() {
        console.log(`${this.brand} ${this.color} state up`);
    }

    down() {
        console.log(`${this.brand} ${this.color} state down`);
    }

    heat() {
        console.log(`${this.brand} ${this.color} state heating`);
    }
}

const phone1 = new Phone('Redmi', "Black", 1, 128);
const phone2 = new Phone('Realmi', "Red", 2, 64);

console.log(phone1);

phone1.heat();
phone2.down();


class Mail {
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
        this._number = this.#generateNumber();
    }

    get number() {
        return this._number;
    }

    set number(number) {
        console.log('not accessible');
    }
 
    // Methods
    send() {
        console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }

    sendLater(delay) {
        console.log(`Sending after ${delay} ms`);
        
        setTimeout(() => {
            this.send();
        }, delay);
    }

    saveAsDraft() {
        console.log('Saving mail as draft');
    }

    #generateNumber() {
        return `${this.sender}-${Math.floor(Math.random() * 100)}`;
    }
}

const mail = new Mail('netr', 'tern', 'test', 'testt');


// mail.#generateNumber();
// console.log(mail.#generateNumber());

// Pewarisan 
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }

    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }

    
}

class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }

    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }

    // overriding method
    sendMessage(message, receiver) {
        super.sendMessage(message, receiver);

        console.log('message sent via whatsapp');
    }
}
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsapp = new MailService('+6285781828384');
const email = new MailService('new@mail.com');
const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210')

whatsapp.sendMessage('Hello', '+6285784858687');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 4000);

// inherit
// function MailService(sender) {
//     this.sender = sender;
//   }
   
//   MailService.prototype.sendMessage = function (message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`);
//   }
   
//   function WhatsAppService(sender) {
//     MailService.call(this, sender);
//   }
   
//   // Prototype inheritance
//   WhatsAppService.prototype = Object.create(MailService.prototype);
//   WhatsAppService.prototype.constructor = WhatsAppService;
   
//   WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
//     for (const receiver of receivers) {
//       this.sendMessage(message, receiver);
//     }
//   }
   
//   function EmailService(sender) {
//     MailService.call(this, sender);
//   }
   
//   // Prototype inheritance
//   EmailService.prototype = Object.create(MailService.prototype);
//   EmailService.prototype.constructor = EmailService;
   
//   EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
//     setTimeout(() => {
//       this.sendMessage(message, receiver);
//     }, delay);
//   }

//   const whatsapp = new MailService('+6285781828384');
//   const email = new MailService('new@mail.com');
   
//   whatsapp.sendMessage('Hello', '+6289876543210');
//   whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
//   email.sendMessage('Hello', 'john@doe.com');
//   email.sendDelayedMessage('Hello', 'john@doe.com', 3000);

