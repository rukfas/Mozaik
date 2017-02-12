var app = angular.module("mozaik",['ngRoute','ngAnimate'])
                 .controller("mozaikCtrl",function($scope,$templateCache,$route){
                  $('.text').fadeIn(2000).removeClass('text-hidden');
                    $scope.reload = function(str){
                            if($route.current.templateUrl.includes(str)){
                                var currentPageTemplate = $route.current.templateUrl;                     $route.reload();
                            }
                            
                    }
                    $scope.reloadCards = function(event){
                        if(event.target.nodeName == "DIV"){
                            var element = $("#"+$(event.target).parent().attr("id"));
                            var text = $(event.target).children("h5").attr("data-id");
                        }
                        else{
                            var element = $("#"+$(event.target).parent().parent().attr("id"));
                             var text = $(event.target).attr("data-id");
                        }
                        $('.listElement').removeClass("active");
                        $("#"+text).addClass("active");
                        
                        var width = $(element).css("width");
                        var parentWidth = $(element).parent().css("width");
                        var procents = (100 * parseFloat(width) / parseFloat(parentWidth));
                        console.log(procents);
                        if(procents < 90 && procents > 80){
                            $(element).children("div#radiallahati").animate({top:"0%",opacity:"0",display:"none"},500);
                            $(".section1").css("width","25%");
                            event.stopPropagation();
                             $('.listElement').removeClass("active");
                        }
                        

                    }
                    
                     $('.tumbnail').click(function(e){e.preventDefault();})
                      $('.carousel-control').click(function(e){e.preventDefault();})
                     $scope.expandWindow = function(num){
                         
                         var pics = $(".section1");
                         var element = pics[num];
                         pics.splice(num,1);
                         $(pics).animate({width:"5%",backgroundSize:"cover"},1);
                         $(pics).children("p").animate({top:"0%", opacity:"0"},1);
                         $(pics).children("div#radiallahati").animate({top:"0%", opacity:"0"},1);
                         $(element).animate({width:"90%",backgroundSize:"cover"},1.5);
                         $(element).children("p").animate({top:"20%", opacity:"1",display:"block"},1000);
                         $(element).children("div#radiallahati").animate({top:"6%", opacity:"1",display:"block"},1000);
                         
                         //OVDE GORE DA TARGETAM DECU
                         
                        //  for(var i = 0 ; i < pics.length;i++){
                        //      if(i != num){
                        //          var p = $(".section1")[i];
                        //          $(p).animate({width:"10%"},100);
                        //          var para = $(p).children();
                        //          $(para)
                        //      }
                        //      else{
                        //          var p = $(".section1")[i];
                        //          $(p)
                        //          var para = $(p).children();
                        //          $(para).animate({top:"50%", opacity:"1",display:"block"},1000);
                        //      }
                        //  }
                         
                         
                     }
                     
                     
                    
                     
                       /*$("#text-slider div:gt(0)").hide();
    
    
                            setInterval(function(){

                                $("#text-slider div:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#text-slider");

                            }, 6000);*/

                      setCarouselHeight('#carousel-example');

    function setCarouselHeight(id)
    {
        var slideHeight = [];
        $(id+' .item').each(function()
        {
            // add all slide heights to an array
            slideHeight.push($(this).height());
        });

        // find the tallest item
        max = Math.max.apply(null, slideHeight);

        // set the slide's height
        $(id+' .carousel-content').each(function()
        {
            $(this).css('height',max+'px');
        });
    }
    function showModal(name,$event){
        console.log(name);

        $("#myModal").modal("show");
    }
                     
                     
                     
                   
                     
                     
                    // Amel Muminovic
                     
                     //Dobro je
                     

                 }).run(function($templateCache) {
                        $templateCache.put('contact.html','<div id="map"> <iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCmGS2dKWXPI4wDr2xAroOjA3oZ8qHzNlk &q=El+Dzej,Novi+Pazar+Serbia" allowfullscreen> </iframe></div> <div id="map-overlay"><div class="container-fluid"><div class="row"><div class="contact-info col-xs-12 col-sm-6"><h1> Osnovni podaci:</h1><p> Vlasnik: Amel Mavric </p><p> Telefon: +381 (0) 62 / 700 700 </p><p>Adresa: Rifata Burdzovica</p><p>e-mail:info@mozaikstudio.rs</p><p>RadnoVreme:9-17 </p><div class="socialn"><p>Pratite nas na:</p><a target="_blank" href="https://www.instagram.com/mozaik_agency/"><img src="images/social/insta.png" class="img-responsive"> </a><a target="_blank" href="https://www.facebook.com/mozaikstudioo?fref=ts"><img src="images/social/s_3.png" class="img-responsive"></a><a target="_blank" href="https://twitter.com/MozaikStudioRS"> <img src="images/social/twitter.png" class="img-responsive"></a></div></div><div class="contact-form col-xs-12 col-sm-6"><form name="form" method="post" action="http://formmail.mozaikstudio.rs" accept-charset="iso-8859-1" role="form"><input type="hidden" name="recipient" value="info@mozaikstudio.rs"> <input type="hidden" name="redirect" value="http://www.mozaikstudio.rs"><div class="form-group"><label for="email">Email: </label><input name="email" type="email" class="form-control" id="email" name="email"placeholder="primer@primer.com"/ required></div><div class="form-group"><label for="name">Ime: </label><input name="name" type="text" class="form-control" id="name" name="name" placeholder="Amel Muminovic"/ required></div><div class="form-group"><label for="message">Poruka: </label><textarea name="body" class="form-control" id="message" name="message" placeholder="Vasa Poruka" required></textarea></div><div class="form-group"><button id="salji" name="submit" type="submit" class="btn btn-default dugme">Posalji Poruku</button></div></form></div></div></div><script async defer    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLTDq46sEqP01bV-SUcFtUB4DsTVjykms&callback=initMap">    </script>');
                        $templateCache.put('fotoart.html','<div id="mozaik"><div class="section1" ng-click="expandWindow(0)" id="five" ng-mouseenter="zoomIn(0)"><div class="sidebar-modeling1" ng-click="reloadCards($event)"><h5 data-id="studio">Studio</h5></div><div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="lhs col-sm-6"> <div class="lhs-content"> <h4>Studijsko Fotografisanje</h4>  <p>Sigurno ste videli da vecina glumaca na sceni izgleda sjajno. Savrseno glatka koza, blistav ten. Ali za to su zasluzni dobri i jaki reflektori. Upravo u foto studiju mogucnosti za fotografisanje su neograniceni. Igra svetlosti i senke moze proizvesti savrsenu fotografiju. Kod nas u studiju mozete se fotografisati pod rasvetom vrhunskog kvaliteta. Nije bitno samo posedovati dobar alat, vec i majstora koji ce taj alat dobro iskoristiti. Tako da odaberite pravog fotografa i uzivajte. </p> </div> </div> <div class="rhs col-sm-6"> <div class="rhs-content"> <h4>Galerija</h4> <div class="gallery"> <div class="row"> <div class="col-sm-4"> <a href="images/fotoart/studijsko/479ff450-2103-4c2b-9f94-591ba9a01489.jpg" data-title="Slike sa photoshootinga" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/479ff450-2103-4c2b-9f94-591ba9a01489.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-4"> <a href="images/fotoart/studijsko/6f9b4e94-c03d-404c-9021-4abdc81fee85.jpg" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/6f9b4e94-c03d-404c-9021-4abdc81fee85.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-4"> <a href="images/fotoart/studijsko/950892d8-d156-47e9-b504-587163c31445.jpg" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/950892d8-d156-47e9-b504-587163c31445.jpg" class="img-rounded img-responsive"></a> </div> </div> <div class="row"> <div class="col-sm-4"> <a href="images/fotoart/studijsko/987e2c4f-1ca8-4d9f-8236-2d15251162d5.jpg" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/987e2c4f-1ca8-4d9f-8236-2d15251162d5.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-4"> <a href="images/fotoart/studijsko/a13ee5f7-9643-4acf-a141-2ad2d6caf7a4.jpg" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/a13ee5f7-9643-4acf-a141-2ad2d6caf7a4.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-4"> <a href="images/fotoart/studijsko/c18a26f8-2115-427f-a5fc-908e40dc46e1.jpg" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/c18a26f8-2115-427f-a5fc-908e40dc46e1.jpg" class="img-rounded img-responsive"></a> </div> </div> <div class="row"> <div class="col-sm-4"> <a href="images/fotoart/studijsko/Capture.PNG" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/Capture.PNG" class="img-rounded img-responsive"></a> </div> <div class="col-sm-4"> <a href="images/fotoart/studijsko/cb32f172-af2e-4ffe-a291-0ff695630921.jpg" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/cb32f172-af2e-4ffe-a291-0ff695630921.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-4"> <a href="images/fotoart/studijsko/f694f0ce-3851-48ee-9ad6-a7c89439e05e.jpg" data-title="My first Caption" data-lightbox="Vacation2"><img src="images/fotoart/studijsko/f694f0ce-3851-48ee-9ad6-a7c89439e05e.jpg" class="img-rounded img-responsive"></a> </div> </div> </div> </div> </div>  </div> </div></div></div><div class="section1" ng-click="expandWindow(1)" id="six" ng-mouseenter="zoomIn(1)"><div class="sidebar-modeling2" ng-click="reloadCards($event)"><h5 data-id="outdoor">Outdoor</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <h3>Fotografisanje na terenu</h3> <p>Zelite da budete zapazeni? Zelite da Vase fotografije budu filmske i da ljudi budu odusevljeni njima? <strong>Odaberite lokaciju</strong> i zamislite kako bi zeleli da to izgleda, ostalo je nas posao. U najkracem mogucem roku cete dobiti zeljene fotografije! </p> <div class="row"> <div class="napolje"> <div class="col-sm-2"> <a href="images/fotoart/teren/1.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/1.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/2.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/2.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/3.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/3.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/4.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/4.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/5.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/5.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/6.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/6.jpg" class="img-rounded img-responsive"></a> </div> <div> </div> </div> </div> <div class="row"> <div class="napolje"> <div class="col-sm-2"> <a href="images/fotoart/teren/7.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/7.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/8.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/8.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/9.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/9.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/10.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/10.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/11.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/11.jpg" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/12.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/12.jpg" class="img-rounded img-responsive"></a> </div> <div> </div> </div> </div> <div class="row"> <div class="napolje"> <div class="col-sm-2"> <a href="images/fotoart/teren/13.png" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/13.png" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/14.png" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/14.png" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/15.png" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/15.png" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/16.png" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/16.png" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/17.png" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/17.png" class="img-rounded img-responsive"></a> </div> <div class="col-sm-2"> <a href="images/fotoart/teren/18.png" data-title="Fotografisanje na terenu" data-lightbox="Vacation"><img src="images/fotoart/teren/18.png" class="img-rounded img-responsive"></a> </div> <div> </div> </div> </div> </div> </div> </div> </div> </div></div><div class="section1" ng-click="expandWindow(2)" id="seven" ng-mouseenter="zoomIn(2)"><div class="sidebar-modeling3" ng-click="reloadCards($event)"><h5 data-id="proizvodi">Proizvodi</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <h3>Fotografisanje proizvoda</h3> <p>Drzite prodavnicu, kafic ili magacin robe? Planirate da otvorite online prodavnicu, ali nemate ideju kako da najlepse predstavite sve Vase proizvode? Mozaik Studio vam nudi unikatno resenje. Dolazimo na Vasu adresu sa nasom najmodernijom fotografskom opremom da zajedno predstavimo Vase prozivode na najelpsi i najkvalitetniji moguci nacin. </p> <div class="row"> <div class="napolje"> <div class="slidza col-sm-4"> <a href="images/fotoart/proizvodi/1.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation3"><img src="images/fotoart/proizvodi/1.jpg" class="img-rounded img-responsive"></a> </div> <div class="slidza col-sm-4"> <a href="images/fotoart/proizvodi/2.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation3"><img src="images/fotoart/proizvodi/2.jpg" class="img-rounded img-responsive"></a> </div> <div class="slidza col-sm-4"> <a href="images/fotoart/proizvodi/3.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation3"><img src="images/fotoart/proizvodi/3.jpg" class="img-rounded img-responsive"></a> </div> <div class="slidza col-sm-4"> <a href="images/fotoart/proizvodi/4.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation3"><img src="images/fotoart/proizvodi/4.jpg" class="img-rounded img-responsive"></a> </div> <div class="slidza col-sm-4"> <a href="images/fotoart/proizvodi/5.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation3"><img src="images/fotoart/proizvodi/5.jpg" class="img-rounded img-responsive"></a> </div> <div class="slidza col-sm-4"> <a href="images/fotoart/proizvodi/6.jpg" data-title="Fotografisanje na terenu" data-lightbox="Vacation3"><img src="images/fotoart/proizvodi/6.jpg" class="img-rounded img-responsive"></a> </div> </div> </div> </div> </div> </div> </div> </div></div>');
                        $templateCache.put('mozaik.html','<div id="mozaik"><div class="section1" ng-click="expandWindow(0)" id="one" ng-mouseenter="zoomIn(0)"><div class="sidebar-modeling1" ng-click="reloadCards($event)"><h5 data-id="agencija">Agencija</h5></div><div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"><div class="chs-content"> <h4>O nama</h4> <p><strong>Mozaik</strong> je grupa internet biznisa. Orijentisani smo na poslovne i tehnoloske inovacije i menjamo trziste na bolje. Vodimo biznise koji su lideri u svojim oblastima rada ili su na putu da to postanu. Zelimo da budemo najbolji u svom poslu i da nasi biznisi budu primeri dobrog poslovanja. Pre samog nastanka radili smo na izgradnji i razvoju internet trzista Srbije i do tada uobicajne prakse informisanja, zaposljavanja i trgovine, preneli smo na internet i modernizovali. I tu nismo stali. Namera nam je da i osim toga, nastavimo dalje, zelimo da budete zadovoljni nasim uslugama i da nam se vracate uvek sa novim kreativnim idejama. Stvorili smo viziju da se nasa firma siri, kako bi bila delotvornija za pruzanje usluga. </p> <div class="row">  <div class="col-md-12"> <blockquote> <p><strong>Mozaik</strong> has been created to help other businesses get the most out of technology. We believe that our potential and advanced knowledge along with our entrepreneurial spirit is the key to our excellence, which is shown in every product or service we provide.</p> <footer>CEO of Mozaik, <cite title="Source Title">Amel Mavric</cite></footer> </blockquote> </div> </div> </div> </div> <div class="fooder col-sm-12"></div> </div> </div></div></div><div class="section1" ng-click="expandWindow(1)" id="two" ng-mouseenter="zoomIn(1)"><div class="sidebar-modeling2" ng-click="reloadCards($event)"><h5 data-id="nas-tim">Nas&nbsp;tim</h5></div><div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <h5>Nas&nbsp;tim</h5> <p>Mozaik je tim mladih, ambicioznih, kreativnih i iskusnih ljudi koji ozbiljno shvataju svoj posao, nastoje Vam pomoci da Vasu ideju proizvedete u remek delo. Mi razumemo svoj posao, takodje nastojimo na tome da i Vas razumemo i da nam pruzimo nas maksimum, pratimo najnovije trendove na svim poljima na kojima delujemo i trudimo se da budemo sto aktuelniji i funkcionalniji.</p> <div class="row"> <div class="nastim"> <img src="images/timovi/mozaik1.jpg" class="img-responsive "> <h4>Amel Mavric</h4> <p>CEO and Founder</p> <p>Marketing expert</p> <div id="jedan1"> <a target="_blank" href="https://www.facebook.com/mavric.amel?fref=ts"><img src="images/social/fbperson.png"></a></div> <div id="dva2"> <a target="_blank" href="https://www.instagram.com/amelmavric/"><img src="images/social/instaperson.png"></a></div> <div id="tri3"> <a target="_blank" href="https://plus.google.com/109592833712255285816"><img src="images/social/gperson.png"></a></div> </div> <div class="nastim"> <img src="images/timovi/mozaik3.jpg" class="img-responsive "> <h4>Almedina Begovic</h4> <p>Model Scout</p> <p>Modeling Expert </p> <div id="jedan1"> <a target="_blank" href="https://www.facebook.com/Mozaik-906685842764868/?fref=ts"><img src="images/social/fbperson.png"></a></div> <div id="dva2"> <a target="_blank" href="https://www.instagram.com/mozaik_agency/"><img src="images/social/instaperson.png"></a></div> <div id="tri3"> <a target="_blank" href="https://plus.google.com/u/0/103876699623226209284"><img src="images/social/gperson.png"></a></div> </div> <div class="nastim"> <img src="images/timovi/mozaik2.jpg" class="img-responsive "> <h4>Amel Muminovic</h4> <p>Web Developer</p> <p>Freelancer</p> <div id="jedan1"> <a target="_blank" href="https://www.facebook.com/Ammmce"><img src="images/social/fbperson.png"></a></div> <div id="dva2"> <a target="_blank" href="https://www.instagram.com/ammce"><img src="images/social/instaperson.png"></a></div> <div id="tri3"> <a target="_blank" href="https://plus.google.com/u/0/114556458888646673961"><img src="images/social/gperson.png"></a></div> </div> </div> </div> </div> </div> </div> </div></div><div class="section1" ng-click="expandWindow(2)" id="three" ng-mouseenter="zoomIn(2)"><div class="sidebar-modeling3" ng-click="reloadCards($event)"><h5 data-id="saradnja">Saradnja</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <h5>Zelite da saradjujete sa nama?</h5> <p>Mozaik studio je otvoren za svaki vid saradnje. Ukoliko ste zainteresovani, popunite formu, i mi cemo razmotriti Vasu ponudu, i odgovoriti u najkracem mogucem roku</p> <div class="row"> <div class="lijevo col-sm-6"> <h3>Forma</h3> <form name="form" method="post" action="http://formmail.mozaikstudio.rs" accept-charset="iso-8859-1" class="biznis-forma"> <input type="hidden" name="recipient" value="info@mozaikstudio.rs"> <input type="hidden" name="redirect" value="http://www.mozaikstudio.rs"> <div class="form-group"> <input type="email" class="form-control" id="inputEmail" placeholder="Unesite vas email" name="email" required> </div> <div class="form-group"> <input type="name" class="form-control" id="inputName" placeholder="Unesite vase ime" name="name" required> </div> <div class="form-group"> <label for="sel1">Izaberite temu</label> <select name="subject" class="form-control" id="sel1"> <option>Modeling</option> <option>Marketing</option> <option>Dizaj i Multimedia</option> <option>Web Development</option> <option>Foto Art</option> </select> </div> <div class="form-group"> <textarea class="form-control"  id="comment" placeholder="Opisite vasu ideju za poslovnu saradnju" required></textarea> </div> <div class="form-group"> <button type="submit" class="btn btn-success">Posalji</button> </div> </form> </div> <div class="dijesno col-sm-6"> <h3>Nasi partneri</h3> <div class="partneri col-sm-4"> <div class="partner1"> <img src="images/partneri/sky.jpg" class="img responsive"> <p>Sky store - Novi Pazar</p> </div> </div> <div class="partneri col-sm-4"> <div class="partner1"> <img src="images/partneri/sminkeraj.jpg" class="img responsive"> <p>Sminkeraj - Novi Pazar</p> </div> </div><div class="partneri col-sm-4"> <div class="partner1"> <img src="images/partneri/heli.jpg" class="img responsive"> <p>Heli Studio - Novi Pazar</p> </div> </div><div class="partneri col-sm-4"> <div class="partner1"> <img src="images/partneri/morison.jpg" class="img responsive"> <p>Morrison GYM - Novi Pazar</p> </div> </div><div class="partneri col-sm-4"> <div class="partner1"> <img src="images/partneri/citys.jpg" class="img responsive"> <p>Frizerski Salon City S </p> </div> </div> <div class="partneri col-sm-4"> <div class="partner1"> <img src="images/partneri/event.jpg" class="img responsive"> <p>Mozaik Event - Novi Pazar</p> </div> </div> <div class="partneri col-sm-4"> <div class="partner1"> <img src="images/partneri/josanica.jpg" class="img responsive"> <p>FK Josanica - Novi Pazar</p> </div> </div> </div> </div> </div> </div> </div> </div> </div></div>');
                        $templateCache.put('modeling.html','<div id="mozaik"> <div class="section1" ng-click="expandWindow(0)" id="seventeen" ng-mouseenter="zoomIn(0)"> <div class="sidebar-modeling1" ng-click="reloadCards($event)"> <h5 data-id="muskarci">Muskarci</h5> </div> <div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:250px; height: 250px;"> <div class="caption"> <p>Rijad</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> </div> </div> </div> </div> </div> </div> <div class="section1" ng-click="expandWindow(1)" id="eightteen" ng-mouseenter="zoomIn(1)"> <div class="sidebar-modeling2" ng-click="reloadCards($event)"> <h5 data-id="devojke">Devojke</h5> </div> <div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> </div> </div> </div> </div> </div> </div> <div class="section1" ng-click="expandWindow(2)" id="nineteen" ng-mouseenter="zoomIn(2)"> <div class="sidebar-modeling3" ng-click="reloadCards($event)"> <h5 data-id="postani-model">Postani&nbsp;model</h5> </div> <div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <a href="" data-toggle="modal" data-target="#myModal" onclick="$("#myModal").modal("show")"> <img src="images/Modeli/Rijad/4.jpg" alt="Lights" style="width:100%"> <div class="caption"> <p>Ime Prezime</p> </div> </a> </div> </div> </div> </div> </div> </div> </div> </div> </div>');
                        $templateCache.put('marketing.html','<div id="mozaik"><div class="section1" ng-click="expandWindow(0)" id="eight" ng-mouseenter="zoomIn(0)"><div class="sidebar-modeling1" ng-click="reloadCards($event)" ><h5 data-id="promo-brenda">Promo&nbsp;brenda</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="lhs col-sm-6"> <div class="lhs-content"> <h4>O Brandingu</h4> <p>Sustina Brenda je prepoznatljivost, nesto sto ce ljudi videti I povezati sa Vasom firmom. Pomislili biste da je jedino resenje placanje velikih suma novca televizijama koje ce pustati Vase reklame u udarnim terminima. Da, moramo priznati – efekat takvog marketinga je zaista veliki, ali jos je veci broj ljudi koji taj novac nemaju. Zato moramo biti kreativni i domisljati.</p> </div> </div> <div class="rhs col-sm-6"> <div class="rhs-content"> <h4>Primeri Brendinga</h4> <div class="brandingg"> <div class="col-sm-4"> <img class="img-responsive img-rounded" src="images/Marketing/1.jpg"> </div> <div class="col-sm-4"> <img class="img-responsive img-rounded" src="images/Marketing/2.jpg"> </div> <div class="col-sm-4"> <img class="img-responsive img-rounded" src="images/Marketing/3.jpg"> </div> <div class="col-sm-4"> <img class="img-responsive img-rounded" src="images/Marketing/4.jpg"> </div> <div class="col-sm-4"> <img class="img-responsive img-rounded" src="images/Marketing/5.jpg"> </div> <div class="col-sm-4"> <img class="img-responsive img-rounded" src="images/Marketing/6.jpg"> </div> </div> </div> </div> <div class="chs col-sm-12"> <img src="images/Marketing/brendiranjequote.PNG" class="brendiranjeimg img-responsive img-rounded"> </div>  </div> </div></div></div><div class="section1" ng-click="expandWindow(1)" id="nine" ng-mouseenter="zoomIn(1)"><div class="sidebar-modeling2" ng-click="reloadCards($event)"><h5 data-id="promo-kampanje">Promo&nbsp;kampanje</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <h3>Promo kampanje</h3> <p>I ako bi vecina luksuznih modnih brendova zelela da opstane na duze staze bez reklamnih kampanja na koje trose poprilcan deo novca, ta opcija jos nije, niti ce biti aktuelna. Slavno ime I uspesna tradicija mozda prodaju brend, ali uraditi odlicnu reklamnu kampanju pitanje je prestiza, uspeha, pa i tog slavnog imena. (Zato se uvek angazuju najbolji u svom poslu ne bi li ceo zadatak bio na visini profesionalan i vizuelno originalan.)</p> <img src="images/Marketing/kampanje.png" class="svarc img-responsive"> </div> </div> </div> </div> </div></div><div class="section1" ng-click="expandWindow(2)" id="ten" ng-mouseenter="zoomIn(2)"><div class="sidebar-modeling3" ng-click="reloadCards($event)"><h5 data-id="direktni-marketing">Direktni&nbsp;marketing</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="lhs col-sm-6"> <div class="lhs-content"> <h4>Direktni marketing</h4> <p>Direktni marketing je jedno od najdinamicnijih podrucja marketinga. Nazivi poput: vodjeni marketing, marketing jedan na jedan ili aktivno oglasavanje na najbolji nacin odrzavaju osnovnu karakteristiku direktnog marketinga – izravnu, neposrednu komunikaciju s kupcem.</p> </div> </div> <div class="rhs col-sm-6"> <div class="rhs-content"> <h4>Sta obuhvata?</h4> <div class="directmarketing">  <ul> <li>direktnu postu - telemarketing</li> <li>prodaju od vrata do vrata</li> <li>kupovinu preko interneta</li> <li>distribuciju raznih vrsta letaka</li> <li>katalosku prodaju</li> </ul> </div> </div> </div> <div class="chs col-sm-12"> <div class="col-sm-6"> <img src="images/Marketing/direktni1.jpg" class="img-responsive"> </div> <div class="col-sm-6"> <img src="images/Marketing/direktni2.jpg" class="img-responsive"> </div> </div> </div> </div> </div></div>');
                        $templateCache.put('multimedia.html','<div id="mozaik"><div class="section1" ng-click="expandWindow(0)" id="eleven" ng-mouseenter="zoomIn(0)"><div class="sidebar-modeling1" ng-click="reloadCards($event)"><h5 data-id="graficki-dizajn">Graficki&nbsp;dizajn</h5></div><div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="lhs col-sm-6"> <div class="lhs-content"> <h4>Graficki Dizajn</h4> <p>Atraktivan dizajn Vaseg identiteta je ujedno i promocija Vase firme, njenih proizvoda i usluga ili Vasa licna reklama. Ulaganje u vizuelni identitet Vaseg preduzeca ili proizvoda je jednokratna, ali dugorocna investicija koja gradi uspesan imidz i razvija njen brend.</p> </div> </div> <div class="rhs col-sm-6"> <div class="rhs-content"> <h4>Tehnologije:</h4> <div class="directmarketing"> <ul> <li>Adobe PhotoShop</li> <li>Adobe Illustrator</li> <li>Adobe Lightroom</li> <li>Adobe Premiere - After Effects</li> <li>Sony Vegas</li> <li>CorelDRAW</li> </ul> </div> </div> </div> <div class="chs col-sm-12"> <h3>Nas portfolio</h3> <div class="portfolio"> <div class="col-sm-3"> <img src="images/graficki/1.png" class="img-responsive img-rounded"> <p>Green Bot <br> 2016</p> </div> <div class="col-sm-3"> <img src="images/graficki/2.png" class="img-responsive img-rounded"> <p>Colorado <br> 2016</p> </div> <div class="col-sm-3"> <img src="images/graficki/3.png" class="img-responsive img-rounded"> <p>Blue Bear <br> 2016</p> </div> <div class="col-sm-3"> <img src="images/graficki/4.jpg" class="img-responsive img-rounded"> <p>Zagreb meetup <br> 2016</p> </div> </div> </div> </div> </div> </div></div><div class="section1" ng-click="expandWindow(1)" id="twelve" ng-mouseenter="zoomIn(1)"><div class="sidebar-modeling2" ng-click="reloadCards($event)"><h5 data-id="izrada-reklama">Izrada&nbsp;reklama</h5></div><div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="chs col-sm-12"> <div class="chs-content"> <h3>Izrada reklama</h3> <p>Svedoci smo da danas video marketing ima najveceg uticaja na kupce. Bilo da se to radi o detetu, tinejdzeru, odrasloj osobi ili penzioneru, ono sto ih svakako ostavlja bez teksta, i sto u njima budi zelju za kupovinom proizvoda, jeste odlicno osmisljena reklama. <strong>Nas studio Vam nudi</strong> mogucnost da sami osmislite kako bi Vasa reklama izgleda, a mi cemo Vase ideje i fantazije pretvoriti u stvarnost. <strong>Nas tim</strong> ce se pobrinuti da to izgleda na svetskom nivou uz nase glumce, sminkere, profesionalne montazere i kamermane, kao i mnoge druge. Angazujte nas i uverite se!</p> <iframe width="560" height="315" src="https://www.youtube.com/embed/dEevxnXHeXI" frameborder="0" allowfullscreen></iframe> </div> </div> </div> </div></div></div><div class="section1" ng-click="expandWindow(2)" id="thirteen" ng-mouseenter="zoomIn(2)"><div class="sidebar-modeling3" ng-click="reloadCards($event)"><h5 data-id="brendiranje">Brendiranje</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="its3am"> <div class="col-sm-4"> <img src="images/samsung.png" class="img-responsive img-rounded"> </div> <div class="col-sm-4"> <img src="images/lumia.jpg" class="img-responsive img-rounded"> </div><div class="col-sm-4"> <img src="images/iphonee.png" class="img-responsive img-rounded"> </div></div> <div class="chs col-sm-12"> <div class="chs-content"> <h3 style="margin-bottom: 0%">Samsung ili iPhone?</h3> <p><strong>Sigurno ste culi za ova dva svetska brenda, i pitate se kako su postali tako poznati?</strong><br>Secate se vremena kada je Nokia bila dominantna, a Ajfon i Samsung da gotovo nisu ni postojali? Vecina danasnjih svetskih brendova poput Sony-a, Windows-a, Samsunga, itd... koristi slicne hardverske komponente, ali upravo <strong>Brendiranje</strong> je kljucna stvar koja je lansirala Ajfon i Samsung toliko daleko. Zelite li da i vi uanpredite Vas biznis? Konsultujte se sa nama!</p> </div> </div>  </div> </div> </div></div>');
                        $templateCache.put('web.html','<div id="mozaik"><div class="section1" ng-click="expandWindow(0)" id="fourteen" ng-mouseenter="zoomIn(0)"><div class="sidebar-modeling1" ng-click="reloadCards($event)"><h5  data-id="web-dizajn">Web&nbsp;dizajn</h5></div><div id="radiallahati"> <div class="container-fluid"> <div class="row"> <div class="lhs col-sm-6"> <div class="lhs-content"> <h4>Web Dizajn</h4> <p>Web dizajn je opsteprihvaceni pojam koji obuhvata razlicite vestine, sandarde i discipline koje se koriste u izradi web stranice. Firma koja danas ne poseduje svoj web portal, moze se smatrati da zapravo ni ne postoji. Budite ispred ostalih, obezbedite sebi najbolju web prezentaciju i prosirite svoj biznis uz nasu strucnu pomoc! </p> </div> </div> <div class="rhs col-sm-6"> <div class="rhs-content"> <h4>Tehnologije:</h4> <div class="pola col-sm-6"> <h5>Front End Techs</h5> <ul> <li>HTML 5 - CSS</li> <li>JavaScript</li> <li>ReactJS</li> <li>Angular 2</li> </ul> </div> <div class="pola col-sm-6"> <h5>Back End Techs</h5> <ul> <li>NodeJS</li> <li>.NET</li> <li>PHP</li> <li>MongoDB, MySQL</li> </ul> </div> </div> </div> <div class="chs col-sm-12"> <h3>Kako mi radimo?</h3> <img src="images/razvoj.png" class="img-responsive"> </div>  </div> </div></div></div><div class="section1" ng-click="expandWindow(1)" id="fifteen" ng-mouseenter="zoomIn(1)"><div class="sidebar-modeling2" ng-click="reloadCards($event)"><h5  data-id="social-marketing">Social&nbsp;marketing</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="chs"> <div class="chs-content"> <div class="row"> <div class="col-sm-4"> <img src="images/socialmarketing1.jpg" class="img-responsive img-rounded"> </div> <div class="col-sm-4"> <img src="images/socialmarketing3.jpg" class="img-responsive img-rounded"> </div> <div class="col-sm-4"> <img src="images/socialmarketing2.jpg" class="img-responsive img-rounded"> </div> </div> <h4>Izgleda vam poznato? Zelite da i drugi vide vas?</h5> <p>Marketing u velikoj meri ukljucuje drustvene medije. Marketinski strucnjaci koriste sadrzaj da bi prosirlili svoje poruke putem drustvenih medija. Izmedju te dve oblasti postoji dosta preklapanja, ali i dosta razlika. Ukoliko zelite da se i Vasa firma promovise na socijalnim mrezama, na pravom ste mestu. <strong>Ako ste zainteresovani za najbolje i najbrze usluge Social Marketinga, vec od danas mozete ciljati odredjenu grupu ljudi, ili ljude sa odredjene lokacije, bilo gde u svetu, koji ce videti Vas proizvod, a samim tim i uvecati Vas profit. Bilo da zelite da se reklamirate na Instagramu, Facebook-u, Youtube-u, Google-u, ili na nekom drugom mestu, Ne oklevajte sa sigurnim profitom! Kontaktirajte nas</strong> </p> </div> </div> </div> </div></div></div><div class="section1" ng-click="expandWindow(2)" id="sixteen" ng-mouseenter="zoomIn(2)"><div class="sidebar-modeling3" ng-click="reloadCards($event)"><h5  data-id="seo-optimizacija">SEO&nbsp;optimizacija</h5></div><div id="radiallahati"><div class="container-fluid"> <div class="row"> <div class="lhs col-sm-6"> <div class="lhs-content"> <h4>Cilj optimizacije</h4> <p>Glavni cilj je da bi vas sajt privukao sto vise kvalitetnih posetilaca sa internet pretrazivaca, tj. onih posetilaca, kojima je Vas sajt i namenjen (a ne po svaku cenu navuci sto vise bilo kakvih posetilaca). Kako to postici? Kontaktirajte nas i otkrijte!</p> </div> </div> <div class="rhs col-sm-6"> <div class="rhs-content"> <h4>Zasto SEO?</h4> <p>Promet na internetu je vecinom vodjen na osnovu rezultata pretrage na komercijalnim pretrazivacima, kao sto su Google ili Yahoo. Ako se Vas sajt ne pojavljuje u ovim pretrazivacima kada se u njih ukucaju kljucne reci vezane za tematiku Vase internet prezentacije, Vas sajt gubi neverovatan broj potencijalnih posetilaca.</p> </div> </div> <div class="chs col-sm-12"> <h3>SEO u 4 koraka</h3> <div class="koraci col-sm-3"> <img src="images/korak1.svg" class="img responsive"> <p>Kontaktirate nas mejlom ili telefonom i dogovorimo saradnju</p> </div> <div class="koraci col-sm-3"> <img src="images/korak2.svg" class="img responsive"> <p>Analiziramo pocetno stanje</p></div> <div class="koraci col-sm-3"><img src="images/korak3.svg" class="img responsive"> <p>Krecemo sa mesecnom SEO optimizacijom i zajedno pratimo rezultate</p></div> <div class="koraci col-sm-3"> <img src="images/korak4.svg" class="img responsive"> <p>Pocinjete da dobijate sve vise klijenata zbog uvecane posete sajtu</p></div> </div>  </div> </div></div></div>');
                        
                    }).config(function($routeProvider){

                     $routeProvider.when('/',{
                         templateUrl:'main.html',
                         controller:'mozaikCtrl'
                     }).when('/contact',{
                         templateUrl:'contact.html',
                         controller:'mozaikCtrl'
                     }).when('/fotoart',{
                         templateUrl:'fotoart.html',
                         controller:'mozaikCtrl'
                     }).when('/mozaik',{
                         templateUrl:'mozaik.html',
                         controller:'mozaikCtrl'
                     }).when('/services',{
                         templateUrl: 'services.html',
                         controller:'mozaikCtrl'
                     }).when('/web',{
                         templateUrl: 'web.html',
                         controller:'mozaikCtrl'
                     }).when('/multimedia',{
                         templateUrl: 'multimedia.html',
                         controller:'mozaikCtrl'
                     }).when('/marketing',{
                         templateUrl: 'marketing.html',
                         controller:'mozaikCtrl'
                     }).when('/modeling',{
                         templateUrl: 'modeling.html',
                         controller:'mozaikCtrl'
                             });
                 });
      function initMap() {
        var uluru = {lat: 43.141396, lng: 20.513217};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


 setTimeout(function(){
 
 $("#skiniga").removeClass("se-pre-con");
 $("#main-container").css("visibility", "visible");
     
 
 
 }, 3500);


$('.home').click(function(){
                     $('.home').addClass('aktivno');  
                     $('.fotoart, .marketing, .dizajn, .socijal, .kontakt, .modeli, .mozemoze').removeClass('aktivno');
                   //  $('.nav2 ').slideDown(1000).removeClass('text-hidden');
                     $('.nav2, .nav3, .nav4, .nav5, .nav6, .nav7').fadeOut(1000);
                     $('.menu').css(
       { "background":"url(images/men1.jpg) no-repeat center center",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                      $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a').removeClass('active');
                     
    });
                    
                     $('.fotoart').click(function(){    
                         $('.fotoart').addClass('aktivno');
                          $(".home, .marketing, .dizajn, .socijal, .kontakt, .modeli, .mozemoze").removeClass('aktivno');
                         $(' .nav3, .nav4, .nav5, .nav6, .nav7').fadeOut(50);
                         $('.nav2 ').slideDown(1000).removeClass('text-hidden');
                         $('.menu').css(
       { "background":"url(images/men2.jpg) no-repeat center center ",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                         $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a').removeClass('active');
                         
                     });
                     
                       $('.marketing').click(function(){    
                         $('.marketing').addClass('aktivno');
                          $(".home, .fotoart, .dizajn, .socijal, .kontakt, .modeli, .mozemoze").removeClass('aktivno');
                         $(' .nav2, .nav4, .nav5, .nav6, .nav7').fadeOut(500);
                         $('.nav3').show(1000).removeClass('text-hidden');
                           $('.menu').css(
       { "background":"url(images/men6.jpg) no-repeat center center ",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                           $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a').removeClass('active');
                         
                     });
                     
                       $('.dizajn').click(function(){    
                         $('.dizajn').addClass('aktivno');
                          $(".home, .fotoart, .marketing, .socijal, .kontakt, .modeli, .mozemoze").removeClass('aktivno');
                         $(' .nav2, .nav3, .nav5, .nav6, .nav7').fadeOut(500);
                         $('.nav4').slideDown(1000).removeClass('text-hidden');
                           $('.menu').css(
       { "background":"url(images/men4.jpg) no-repeat center center ",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                           $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a').removeClass('active');
                         
                     });
                     
                       $('.socijal').click(function(){    
                         $('.socijal').addClass('aktivno');
                          $(".home, .fotoart, .marketing, .dizajn, .kontakt, .modeli, .mozemoze").removeClass('aktivno');
                         $(' .nav2, .nav3, .nav4, .nav6, .nav7').fadeOut(500);
                         $('.nav5').show(1000).removeClass('text-hidden');
                            $('.menu').css(
       { "background":"url(images/men5.jpg) no-repeat center center ",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                           $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a').removeClass('active');
                         
                     });
                     
                     $('.kontakt').click(function(){    
                         $('.kontakt').addClass('aktivno');
                          $(".home, .fotoart, .marketing, .dizajn, .socijal, .modeli, .mozemoze").removeClass('aktivno');
                         $(' .nav2, .nav3, .nav4, .nav5, .nav6, .nav7').fadeOut(1000);
                          $('.menu').css(
       { "background":"url(images/men3.jpg) no-repeat center center ",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                         $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a').removeClass('active');
                         
                         
                     });
                     
                     
                     
                     $('.modeli').click(function(){    
                         $('.modeli').addClass('aktivno');
                          $(".home, .fotoart, .marketing, .dizajn, .socijal, .kontakt, .mozemoze").removeClass('aktivno');
                         $(' .nav2, .nav3, .nav4, .nav5, .nav6').fadeOut(1000);
                          $('.nav7').slideDown(1000).removeClass('text-hidden');
                          $('.menu').css(
       { "background":"url(images/men8.jpg) no-repeat center center ",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                         $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a, .nav7 ul li a').removeClass('active');
                         
                        
                     });
                     
                     
                     $('.mozemoze, .rmore').click(function(){    
                         $('.mozemoze').addClass('aktivno');
                          $(".home, .fotoart, .marketing, .dizajn, .socijal, .kontakt, .modeli").removeClass('aktivno');
                         $(' .nav2, .nav3, .nav4, .nav5, .nav7').fadeOut(1000);
                         $('.nav6').slideDown(1000).removeClass('text-hidden');
                          $('.menu').css(
       { "background":"url(images/men7.jpg) no-repeat center center ",
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover" }
    );
                         $('.nav2 ul li a, .nav3 ul li a, .nav4 ul li a, .nav5 ul li a, .nav6 ul li a').removeClass('active');
                         
                         
                     });
                     



         
                     // Active funkcije za navbarove sa strane
                     
                     $('.nav2 ul li a').click(function(){
                         
                         $('.nav2 ul li a').removeClass('active');
                         
                         $(this).addClass('active');
                         
                     });
                     
                     
                      $('.nav3 ul li a').click(function(){
                         
                         $('.nav3 ul li a').removeClass('active');
                         
                         $(this).addClass('active');
                         
                     });
                 
                     
                      $('.nav4 ul li a').click(function(){
                         
                         $('.nav4 ul li a').removeClass('active');
                         
                         $(this).addClass('active');
                         
                     });
                     
                     
                      $('.nav5 ul li a').click(function(){
                         
                         $('.nav5 ul li a').removeClass('active');
                         
                         $(this).addClass('active');
                         
                     });
                     
                      $('.nav6 ul li a').click(function(){
                         
                         $('.nav6 ul li a').removeClass('active');
                         
                         $(this).addClass('active');
                         
                     });
                     
                           $('.nav7 ul li a').click(function(){
                         
                         $('.nav7 ul li a').removeClass('active');
                         
                         $(this).addClass('active');
                         
                     });


                     
                 

