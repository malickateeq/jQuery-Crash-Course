// Important note: always put JS in body tags
// preferably just above body closing tag </body>
// It'll not work if you put in header.
// If you put it on header it'll try to render html elements
// before they are loaded on browser.

// If you want to use it on header use below function
// $(document).ready(function(){
    //Your scriptiong here...
//})


//  * * * jQuery SELECTORS * * * //

// Select everything
// $('*').hide();

// Select an HTML element using tags
// hide() method is used to hide html elements
// $('h1').hide();

// Select an HTML element using tag+id
// $('h1#heading1').hide();

// Select an HTML element using tag+class
// $('h1.heading2').hide();

// Select an HTML element using id or class only
// $('#heading1').hide();
// $('.heading2').hide();

// Select nested tags i.e. select <span> inside <p>
// $('p span').hide();

// Select List Items
// $('ul#list li:first').hide();
// $('ul#list li:last').hide();
// $('ul#list li:even').hide();
// $('ul#list li:odd').hide();
// Select every third
// $('ul#list li:nth-child(3n)').hide();

// Select buttons/inputs
// :button, : means select all of type 'button', 'submit', 'text' etc.
// $(':button').hide();

// Select links
// $('[href]').hide();
// Select link using its address
// $('a[href="http://www.google.com"]').hide();


//  * * * jQuery EVENTS * * * //

// Button click event
// $('#btn1').click(function(){
//     alert('Button Clicked!');
// });

// On a specific event
// $('#btn1').on('event', 'function');
// Some events are 'click', 'dblclick',
// 'mouseenter', 'mouseleave', 'mousemove',
// 'mouseup', 'mousedown' 

// Double click event
// $('#btn1').on('dblclick',function(){
//     $('.para2').toggle();
// });

// Toogle method is used to show/hide html element on click
// $('#btn1').on('click',function(){
//     $('.para2').toggle();
// });

// Short hand syntax for mouse enter and leave
// $('#btn1').hover(function(){
//     $('.para2').toggle();
// });

// Mouse click event parameter
// $('#btn1').click(function(e){
//     // This e has tons of stuff
//     console.log('The code of button: '+e.which); // Enter has 13 code
//     console.log(e);
//     console.log(e.currentTarget.id);
//     console.log(e.currentTarget.innerHTML);
//     console.log(e.currentTarget.outerHTML);
//     console.log(e.currentTarget.className);
// });

// Mouse move event parameter
// $('#btn1').on('mousemove',function(e){
//     console.log('Coords: Y: '+ e.clientY+ ' X: '+ e.clientX);
// });

// Focus event
// $('input').focus(function(){
//     console.log('Focused');
//     // Wherevever input is focused the name input will be hide
//     // $('input#name').hide();
//     // We can use this keyword to indicate current focused element
//     $(this).hide();
// });

// Blur event, blur() is opposite of focus
// $('input').blur(function(){
//     console.log('Blurred');
//     $(this).css('background', 'grey');
// });

// Keydown === press down a key
// Keyup === release a key
// Will show whatever is typing
// $('input').keyup(function(e){
//     console.log(e.target.value);
// });

// When select element is changed
// $('select#gender').change(function(e){
//     console.log(e.target.value);
// });

// Form submit event
// $('#form').submit(function(e){
//     console.log('Submitted');
// });

// Form prevent from submitting & get input value
// $('#form').submit(function(e){
//     e.preventDefault();
//     var name = $('input#name').val();
//     console.log(name);
// });

// Apply CSS properties to a selected element
// $('element').css('property', 'value');
// LIKE;
// $('p span').css('color', 'red');

//  * * * jQuery DOM Manipulation * * * //

// Apply CSS properties to <p> of id para1
// $('p#para1').css({
//     color: 'red',
//     background: '#ccc'
// });

// Add/Remove/toggle class to HTML element
// $('p.para2').addClass('MyCssClass');
// $('p.para2').removeClass('MyCssClass');
// === above two lines equals to below func
// $('#btn1').click(function(){
//     $('p.para2').toggleClass('MyCssClass');
// });

// Add text to div
// $('#myDiv').text('Hello World');

// To add html complete element
// $('#myDiv').html('<h1> Hello </h1>');

// Get div value
// console.log( $('#myDiv').text() );

// Append and Prepend in list items
// append added to last, prepend added at the beginning
// $('ul#list').append('<li>Added by jQuery</li>');

// Append something to some other element
// $('#para1').appendTo('.para2');
// $('#para1').prependTo('.para2');

// Add somethoing before and after some element
// $('p').before('<h1>hello</h1>');
// $('p').after('<h1>hello</h1>');

// Remove/ empty something
// $('p').empty();

// Remove element completely
// $('p').detach();

// Manipulate attributes
// $('a').attr('target', '_blank');

// Get some tag's attribute
// console.log($('a').attr('href'));

// Remove tag's attribute
// $('a').removeAttr('href');

// Wrap (write within) some element
// Dont add closing tag
// $('#para1').wrap('<h1>');

// All elemets p will be wrapped within one h1 tag
// $('p').wrapAll('<h1>');


//  * * * jQuery Arrays Loops * * * //

// Append elemts to the list from input field
// $('input#newItem').keyup(function(e){
//     var code = e.which;
//     if(code == '13') // 13==Enter key
//     {
//         e.preventDefault();
//         $('ul').append('<li>'+e.target.value+'</li>');
//     }
// });

// jQuery arrays and loops
// var myArray = ['Malik', 'Ateeq', 'Rehman'];
// $.each(myArray, function(index, value){
//     console.log('Value at index('+index+') is: '+value);
// });

// Convert list to array
// var newArr = $('ul#list li').toArray();
// console.log(newArr);
// $.each(newArr, function(index, value){
//     console.log('Value at index('+index+') is: '+value.innerHTML);
// });


//  * * * jQuery Effects and Animations * * * //

// Fading effects using buttons
// $('#btnFadeOut').click(function(){
//     $('#box').fadeOut(2000, function(){  // time in ms 1000ms=1sec
//         //Optional function
//         $('btnFadeOut').text('Its gone.');
//     });
// });

// $('#btnFadeIn').click(function(){
//     $('#box').fadeIn(2000);
// });

// $('#btnFadeToggle').click(function(){
//     $('#box').fadeToggle(1000);
// });

// Some sliding animations
// $('#btnSlideUp').click(function(){
//     $('#box').slideUp(1000);
// });
// $('#btnSlideDown').click(function(){
//     $('#box').slideDown(1000);
// });
// $('#btnSlideTog').click(function(){
//     $('#box').slideToggle(1000);
//     // To stop animation on the position
//     // $('#box').stop();
// });

// Move positions animations
// $('#btnMoveRight').click(function(){
//     $('#box2').animate({
//         left: 500,
//         height: '100px',
//         widht: '100px',
//         opacity: '0.5'
//     });
// });
// $('#btnMoveLeft').click(function(){
//     $('#box2').animate({
//         left: 0,
//         height: '50px',
//         widht: '50px',
//         opacity: '1'
//     });
// });
// $('#btnMoveAround').click(function(){
//     var box = $('#box2');
//     box.animate({
//         left: 50
//     });
//     box.animate({
//         top: 50
//     });
//     box.animate({
//         left: 0,
//         to: 50
//     });
//     box.animate({
//         left: 0,
//         top: 0
//     });
// });



//  * * * jQuery AJax * * * //

// Guide If You Are Working With Simple HTML files
// Install npm and node, open terminal goto project dir
// run this  command "npm install live-server -g"
// OR Simply put project files in XAMP htdocs and run live-server

//Load file from directory
// $('#result').load('test.html', function(responseTxt, statusTxt, xhr){
//     //Optional callback function
//     if(statusTxt == 'success')
//     {
//         console.log('fine');
//     }else if(statusTxt == 'error'){
//         console.log('Error: '+xhr.statusTxt);
//     }
// });

//Load file from directory using get method
// $.get('test.html', function(data){
//     $('#result').html(data);
// })

// Get Json files
// $.getJSON('users.json', function(data){

//     $.each(data, function(index, user)
//     {
//         $('ul#list').append('<li>'+user.firstName+'</li>')
//     });
// });

// $.ajax({
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     dataType: 'json'
// }).done(function(data){
//     console.log(data);
//     $.map(data, function(post, i){
//         $('result').append('<h3>'+post.title+'</h3>');
//     })
// });


// POST form

// $('postForm').submit(function(e){
//     e.preventDefault();
//     var title = $('name').val();
//     var date = $('date').val();
//     var url = $(this).attr('date');

//     $.post(url, {title: title, date: date})
//     .done(function(data){
//         console.log("Post saved");
//         console.log(data);
//     });

// });

