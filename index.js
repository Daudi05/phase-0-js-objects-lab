//Write your code here
//create the attendee object
let attendee= {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150
}
// Logging attendee name
function logAttendeeName(attendee) {
  console.log(attendee.name)
}

// Logging ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}
// Updating ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType
}
// Updating ticket price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice
}
// Removing the event property
function removeEventProperty(attendee) {
  delete attendee.event
}

// Adding checked in property
  function addCheckedInProperty(attendee) {
  attendee.checkedIn = true
}
//addCheckedInProperty()
console.log(attendee)


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};