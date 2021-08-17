const quotes = [ {
    quote:"Flattery is all right if you don't inhale."
    Author:"Adlai E.Stevenson Jr."
},
{
    quote:"It's the friends you can call up at four a.m. that matter."
    Author:"Marlene Dietrich"
},
{
 quote:"We secure our friends not by accepting favors but by doing them."
 Author:"Thucydides"
},
{
quote:"What is a friend? A single soul dwelling in two bodies."
Author:"Aristotle"
},

{
quote:"He who can, does. He who cannot, teaches."
Author:"George Bernard Shaw"
},
{
    quote:"Prosperity makes friends, adversity tries them."
    Author:"Publilius Syrus"
},
{
    quote:"Life is a risk."
    Author:"Diane Frolov"
},
{
    quote:"If I have lost confidence in myself, I have the universe against me."
    Author:"Ralph Waldo Emerson"
},
{
    quote:"Love is an irresistible desire to be irresistibly desired"
    Author:"Robert Frost"
},
{
    quote:"To love is to receive a glimpse of heaven."
    Author:"Karen Sunde"
} ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * 10)]); 