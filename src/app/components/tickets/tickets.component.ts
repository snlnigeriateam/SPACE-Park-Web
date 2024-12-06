import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  selectedTicket: string | null = null;
  selectedButton: string | null = null;

  // Define the quantities for each type of ticket
  quantities = {
    adult: 0,
    child: 0,
    student: 0,
    senior: 0
  };

  // Ticket prices
  prices = {
    adult: 0,
    child: 0,
    student: 0,
    senior: 0
  };

  // Saved quantities and total price after clicking "Next"
  savedQuantities = {
    adult: 0,
    child: 0,
    student: 0,
    senior: 0
  };
  savedTotalPrice: number = 0;

  // Ticket types for easy iteration
  ticketTypes: Array<keyof typeof this.quantities> = ['adult', 'child', 'student', 'senior'];

  // Function to handle ticket selection
  onTicketSelect(ticketType: string): void {
    this.selectedTicket = ticketType;
    this.selectedButton = null;  // Reset button selection
    this.updatePrices(ticketType);
    this.resetQuantities();  // Reset the quantities to 1 each time a new ticket is selected
  }

  // Function to handle button selection
  onButtonSelect(buttonType: string): void {
    this.selectedButton = buttonType;
    if (buttonType === 'next') {
      this.saveQuantitiesAndTotal(); // Save current quantities and total price
    }
  }

  // Function to update prices based on selected ticket type
  updatePrices(ticketType: string): void {
    switch (ticketType) {
      case 'All-access':
        this.prices = {
          adult: 5000,
          child: 2000,
          student: 3000,
          senior: 2000
        };
        break;
      case 'Basic-access':
        this.prices = {
          adult: 3000,
          child: 1000,
          student: 2000,
          senior: 2000
        };
        break;
      case 'Gallery-access':
        this.prices = {
          adult: 4000,
          child: 1500,
          student: 2500,
          senior: 2500
        };
        break;
      case 'Other-tests':
        this.prices = {
          adult: 4000,
          child: 1500,
          student: 2500,
          senior: 2500
        };
        break;
      default:
        this.prices = {
          adult: 0,
          child: 0,
          student: 0,
          senior: 0
        };
        break;
    }
  }

  // Function to reset quantities
  resetQuantities(): void {
    this.quantities = {
      adult: 0,
      child: 0,
      student: 0,
      senior: 0
    };
  }

  // Function to increment quantity
  incrementQuantity(type: keyof typeof this.quantities): void {
    this.quantities[type]++;
  }

  // Function to decrement quantity
  decrementQuantity(type: keyof typeof this.quantities): void {
    if (this.quantities[type] > 0) {
      this.quantities[type]--; 
    }
  }

  // Function to get total price
  getTotalPrice(): number {
    let total = 0;
    for (const type in this.quantities) {
      total += this.quantities[type as keyof typeof this.quantities] * this.prices[type as keyof typeof this.prices];
    }
    return total;
  }

  // Function to save current quantities and total price
  saveQuantitiesAndTotal(): void {
    this.savedQuantities = { ...this.quantities }; // Save current quantities
    this.savedTotalPrice = this.getTotalPrice();  // Save total price
  }
}
