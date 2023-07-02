let btn  = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
 quote: `"The best way to find yourself is to lose yourself in the 
    service of others."`,
    person: ` Mahatma Ghandi`
},
 {
 quote: `"“We need much less than we think”."`,
    person: ` Maya Angelou`
}, 


{
    quote: `"“More important than a clean house is a 
    close family. ”."`,
       person: ` Ann Voskamp`
   }, 
   


   {
    quote: `"“No one ever shamed themselves 
    into better mental health”."`,
       person: ` Kc Davis`
   }, 
   
   


   {
    quote: `"“Her absence is like the sky, 
    spread over everything.”."`,
       person: ` Dean hope`
   }, 
   

   {
    quote: `".We've been taught that we can organize our way out of an overwhelming situation. 
     But clutter in a box is still clutter, anda jam packed schedule perfectly color coded
       is still a jam packed schedule

    ”."`,
       person: ` virgil don`
   }, 
   


   {
    quote: `"Losing a parent is something like driving through a plate-glass window. You didn’t know it was there until it shattered, and then for years to come you’re picking up 
    the pieces — down to the last glassy splinter

    ”."`,
       person: ` Saul Bellow`
   }, 
   

   {
    quote: `"Just do what works for you because there will always be someone who thinks differently
    ”."`,
       person: ` Michelle Obama`
   }, 


   {
    quote: `"Cleaning anything involves making
     something else dirty, but anything can 
    get dirty without something else getting clean
    ”."`,
       person: ` laurence j. peter`
   }, 

   {
    quote: `"Those we love never truly leave us,
     Harry. There are things
     that death cannot touch
    ”."`,
       person: ` Jack Thorne`
   }, 
];

btn.addEventListener('click', function(){
let random = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes [random].quote;
person.innerText = quotes[random].person;

})