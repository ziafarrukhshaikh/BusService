 function bookmytrip()
        {
            var FNameInput, LNameInput, Passengers$, Amenities$, Days$, destination$, hotel$, mealchoice, destinationchoice,hotelchoice,passenger,numberofdays, SRequests,Achoices, totalcost$, meal$;
            
            
             FNameInput=document.getElementById("1001").value;
             LNameInput=document.getElementById("1002").value;
             Passengers$=document.getElementById("1010").value;
             Amenities$=document.getElementById("1012").value;
             Days=document.getElementById("1011").value;
             SRequests=document.getElementById("1016").value;
            
            
         if  (document.getElementById("1004").checked)
              {
            destinationchoice == ("20");
              }
        else if (document.getElementById("1005").checked)
            { 
                destinationchoice ==("35") ;
            }
         else 
            { 
                destinationchoice ==("40") ;
            }
            
            
            if(destinationchoice=="20")
                {
                    destination$ = " Milwaukee ";
                }
         else if(destinationchoice=="35")
                { 
                    destination$ = " Detroit ";
                }
             else(destinationchoice=="40")
                {
                    destination$ = " St Louis ";
                }
        
        
           if (document.getElementById("1007").checked)
            {
             hotelchoice == ("50");
            }
         else if (document.getElementById("1008").checked)
            {
                hotelchoice == ("70");
            }
        else 
            {
                hotelchoice == ("120");
            }
        
            
            
            if (document.getElementById("1013").checked)
                {
                    mealchoice ==("0");
                }
            else if (document.getElementById("1014").checked)
                {
                   mealchoice == ("5");
                }
            else 
                {
                   mealchoice == ("10");
                }
              
            if (mealchoice=="0")
                {
                    meal$ =" No meal plan ";
                }
          else  if (mealchoice=="5")
                {
                    meal$ =" Snack meal ";
                }
            else (mealchoice=="10")
                {
                    meal$ =" Full meal ";
                }
            
            if (Passengers$ == "1")
                {
                    passenger= "1 passenger";
                }
             if (Passengers$ == "2")
                {
                    passenger= "2 passengers";
                }
             if (Passengers$ == "3")
                {
                    passenger= "3 passengers";
                }
             if (Passengers$ =="4")
                {
                    passenger= "4 passengers";
                }
             if (Passengers$ == "5")
                {
                    passenger= "5 passengers";
                }
             if (Passengers$ == "6")
                {
                    passenger= "6 passengers";
                }
            
            
            
            if (Days$=="2")
                {
                    numberofdays= " 2 days ";
                }
            if (Days$=="3")
                {
                    numberofdays= " 3 days ";
                }
            if (Days$=="4")
                {
                    numberofdays= "4 days";
                }
            if (Days$=="5")
                {
                    numberofdays= "5 days";
                }
            if (Days$=="6")
                {
                    numberofdays= "6 days";
                }
            if (Days$=="7")
                {
                    numberofdays= "7 days";
                }
            
                    if (Amenities$=="10")
                        {
                            Achoices= " Wifi ";
                        }


                    if (Amenities$=="20")
                        {
                            Achoices= " Reclining Seats ";
                        }

            if (hotelchoice=="50")
                {
                    hotel$ = " Economy ";
                }
            if (hotelchoice=="70")
                {
                    hotel$ = " Standard ";
                }
            if (hotelchoice=="120")
                {
                    hotel$ = " Up-Scale ";
                }
            
            
            totalcost$ = ((destinationchoice*Passengers$)*1) + ((Amenities$*Passengers$)*1) + ((hotelchoice*numberofdays)*1) + ((mealchoice*Passengers$)*1) + (hotelchoice*1)
            
            
            document.getElementById("p1").innerHTML = " Thank you " + FNameInput + LNameInput + " for booking your trip with us " + " . " + passenger + " travelling to " + destination$ + " . " + FNameInput + " you have selected " + hotel$ +  meal$ + " plan as your choice " + " . " + " The amenities that you have selected are as follows " + Achoices + " . " + " Special requests : " + SRequests + " . " + " Dear customer the total bill for trip is $ " + totalcost$ + " . " + " We hope you have an enjoyable trip and hope you travel with us again. Thank you! ";
            
            
        }