
function whichSide(x)
{

    var i = 1;
    var z = 0;
    
    var text = document.getElementById("art");
    var header = document.getElementById("name");
    var name;
   
    var type = [];
    for(i=0; i<5; i++)
    {
        type[i] = [];
    }
    
    
    type[0][0] = '<div class="stext"><h2>Margaritta</h2><br />Składniki: Sos, ser, oregano</div>';
    type[0][1] = '<div class="stext"><h2>Studencka</h2>Składniki: Sos, ser, pomidor, wołowina, pieczarki, oregano</div>';
    type[0][2] = '<div class="stext"><h2>Firmowa</h2>Składniki: Sos, ser, kurczak, szynka, kukurydza, oregano</div>';
    type[1][0] = '<div class="stext"><h2>Ravioli z mięsem</h2></div>';
    type[1][1] = '<div class="stext"><h2>Lasagna</h2></div>';
    type[1][2] = '<div class="stext"><h2>Zapiekanka</h2></div>';
    type[1][3] = '<div class="stext"><h2>Spagetti Bolognese</h2></div>';
    type[1][4] = '<div class="stext"><h2>Spagetti Carbonara</h2></div>';
    type[2][0] = '<div class="stext"><h2>Sałatka warzywna</h2><br />Składniki: Kapusta lodowa, pomidor, ser feta, ogorek, oliwki</div>';
    type[2][1] = '<div class="stext"><h2>Sałatka z kurczakiem</h2><br />Składniki: Kapusta lodowa, pomidor, kurczak, ogorek</div>';
    type[3][0] = '<div class="stext"><h2>Deser lodowy</h2></div>';
    type[3][1] = '<div class="stext"><h2>Tiramisu</h2></div>';
    type[4][0] = '<div class="stext"><h2>Fanta</h2></div>';
    type[4][1] = '<div class="stext"><h2>Coca-Cola</h2></div>';
    type[4][2] = '<div class="stext"><h2>Woda</h2></div>';

    
    if(x === 0)
    {
        text.innerHTML = "";
        name = "Pizza";
        header.innerHTML = "Pizza";
        
        for(i=1; i<4; i++)
        {
            z = type[0][i-1];
            text.innerHTML += ' <section> <div class="product"> <div class="simg" id="image"><img src="img/type'+x+i+'.jpg" /> </div>'+ z +' <div class="price"> <div class="info"> <h3>Cena</h3> 20zł <div class="checkButton" id="subim'+x+'">ZAMÓW</div> <div style="clear:both;"></div></div> </div> </section>';
        }
    }

    else if(x === 1)
    {
        text.innerHTML = "";
        name = "Dania";
        header.innerHTML = name;
        
        for(i=1; i<6; i++)
        {
            z = type[1][i-1];
            text.innerHTML += ' <section> <div class="product"> <div class="simg" id="image"><img src="img/type'+x+i+'.jpg" /> </div>'+ z +' <div class="price"> <div class="info">  <h3>Cena</h3> 15zł  <div class="checkButton" id="subim1">ZAMÓW</div> <div style="clear:both;"></div></div> </div> </section>';
        }
    }

    else if(x === 2)
    {
        text.innerHTML = "";
        name = "Sałatki";
        header.innerHTML = name;
        
        for(i=1; i<3; i++)
        {
            z = type[2][i-1];
            text.innerHTML += ' <section> <div class="product"> <div class="simg" id="image"><img src="img/type'+x+i+'.jpg" /> </div>'+ z +' <div class="price"> <div class="info"> <h3>Cena</h3> 10zł <div class="checkButton" id="subim'+x+'">ZAMÓW</div> <div style="clear:both;"></div></div> </div> </section>';
        }
    }

    else if(x === 3)
    {
        text.innerHTML = "";
        name = "Desery";
        header.innerHTML = name;
        
        for(i=1; i<3; i++)
        {
            z = type[3][i-1];
            text.innerHTML += ' <section> <div class="product"> <div class="simg" id="image"><img src="img/type'+x+i+'.jpg" /> </div>'+ z +' <div class="price"> <div class="info"> <h3>Cena</h3> 13zł <div class="checkButton" id="subim'+x+'">ZAMÓW</div> <div style="clear:both;"></div></div> </div> </section>';
        }
    }

    else if(x === 4)
    {
    text.innerHTML = "";
        name = "Napoje";
        header.innerHTML = name;
        for(i=1; i<4; i++)
        {
            z = type[4][i-1];
            text.innerHTML += ' <section> <div class="product"> <div class="simg" id="image"><img src="img/type'+x+i+'.jpg" /> </div>'+ z +' <div class="price"> <div class="info"> <h3>Cena</h3> 5zł <div class="checkButton" id="subim4">ZAMÓW</div> <div style="clear:both;"></div></div> </div> </section>';
        }
    }


};


window.onload = function()
{
  
    var text = document.getElementById("art");

    var y = 0;
    var z = 0;
    var x = 0;
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    var t4 = document.getElementById("t4");
    var t5 = document.getElementById("t5");

    var check = document.getElementsByClassName("checkButton");

   


    whichSide(x);

   
    
    t1.onclick = function() 
    {
        x = 0;
        whichSide(x);
    }

    t2.onclick = function()
    {
        x = 1;
        whichSide(x);
       
    
    };

    t3.onclick = function()
    {

        x = 2;
        whichSide(2);
    };
    t4.onclick = function()
    {

        x = 3;
        whichSide(3);
    };
    t5.onclick = function()
    {

        x = 4;
        whichSide(4);
    };

    check.onclick = function()
    {
        alert("ioioio");
    };


    
    
};