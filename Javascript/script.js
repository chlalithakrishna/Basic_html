
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-OYIBE2USXLTJ-2");



function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'demouser@gmail.com' || a == 'lkchittajallu@gainsight.com' || a=='demo2user2@gmail.com')
    { 
        var b= a.substr(0,5);
      
      //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": b, // Required for logged in app users
    "email": a,
    "firstName": "Lalitha",
    "lastName": "Krishna"
  },
  {
  //Account Fields
    "id":"1P02IGP0ZP5EK6RXO7P85X9GKP1LRRCPG4QO", //Required
    "name":"Demo Company for PX"
 });
      
        alert('valid user');
        location.href = "Page1.html";
    }
      if (a == 'testuser@gmail.com')
    { 
        var b= a.substr(0,5);
      
      //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": b, // Required for logged in app users
    "email": a,
    "firstName": "test",
    "lastName": "User"
  },
  {
  //Account Fields
    "id":"1P02IGP0ZP5EK6RXO7P85X9GKP1LRRCPG4QO", //Required
    "name":"Demo Company for PX"
 });
      
        alert('valid user');
        location.href = "Page1.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demouser@gmail.com as username');
    }
}

function addtocart()
{
    alert("Added to cart");
}
