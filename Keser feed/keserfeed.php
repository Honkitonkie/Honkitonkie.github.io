<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Share+Tech+Mono" rel="stylesheet">
    <link rel="stylesheet" href="keserfeed.css" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>feed</title>
</head>

<body>
    <nav>
<ul class="hList">
  <li>
    <a href="http://www.patientje.nl" class="menu">
      <h2 class="menu-title">Patientje</h2>
       <ul class="menu-dropdown">
        <li>Patientje</li>
        
<!--        <li>Anders...</li>-->
      </ul>
    </a>
      

      
 <svg height="200" width="200" style="margin-top:-50px;margin-right:-590px;">
  <polygon points="100,200 100,50 150,50" style="fill:#FCCB1A;stroke:#fff5dc;stroke-width:1;fill-rule:nonzero;"/>
     
     <polygon points="100,200 50,50 100,50" style="fill:#fff5dc;stroke:#FCCB1A;stroke-width:1;fill-rule:nonzero;"/>
  Sorry, your browser does not support inline SVG.
</svg>
      
             
      
  </li>
  <li>
    <a href="http://www.patientje.nl/wvdd/wvdd.html" class="menu">
      <h2 class="menu-title menu-title_2nd">Woord van de dag</h2>
      <ul class="menu-dropdown">
        <li>Woord van de dag</li>
          
      </ul>
    </a>
      
 <svg height="200" width="200" style="margin-top:-50px;margin-right:-590px;">
  <polygon points="100,200 100,50 150,50" style="fill:#FCCB1A;stroke:#fff5dc;stroke-width:1;fill-rule:nonzero;"/>
     
     <polygon points="100,200 50,50 100,50" style="fill:#fff5dc;stroke:#FCCB1A;stroke-width:1;fill-rule:nonzero;"/>
  Sorry, your browser does not support inline SVG.
</svg>

      
  </li>
  <li>
    <a href="http://www.patientje.nl/meerinfo.html" class="menu">
      <h2 class="menu-title menu-title_3rd">Inschrijven</h2>
      <ul class="menu-dropdown">
        <li>Meer info</li>
      </ul>
    </a>
            <svg height="200" width="200" style="margin-top:-50px;margin-right:-590px;">
  <polygon points="100,200 100,50 150,50" style="fill:#FCCB1A;stroke:#fff5dc;stroke-width:1;fill-rule:nonzero;"/>
     
     <polygon points="100,200 50,50 100,50" style="fill:#fff5dc;stroke:#FCCB1A;stroke-width:1;fill-rule:nonzero;"/>
  Sorry, your browser does not support inline SVG.
</svg>

      
  </li>
  <li>
    <a href="https://nl.pinterest.com/kooymand/portfolio/" class="menu">
      <h2 class="menu-title menu-title_4th">Portfolio</h2>
      <ul class="menu-dropdown">
        <li>Portfolio</li>
      </ul>
    </a>

 


  </li>
</ul>  
</nav>


    
    <div class="w3-container">


        
        
        
        <?php

      
    $html = "";

                  
             
$url = "http://keser.carerix.com/cxtools/RSS.php?medium=web&count=50&";
$xml = simplexml_load_file($url);
for($i = 0; $i < 10; $i++){
   
    
    $guid = $xml->channel->item[$i]->guid;    
    $pubDate = $xml->channel->item[$i]->pubDate;
    $title = $xml->channel->item[$i]->title;
    $applyurl = $xml->channel->item[$i]->applyUrl;
    


    
        $breakdown = $xml->channel->item[$i]->link;
        $parsedUrl = parse_url($breakdown);
        $path = explode('/',$parsedUrl['path']);
    
$plaats = $xml->channel->item[$i]->title;
$words = explode(' ',$title); // Break words into array
$noofwords = count($words); // Find out how many
unset($words[$noofwords-1]); // remove the last one (-1 because of zero-index)
unset($words[$noofwords-2]);
$title = implode(' ',$words); //put back together
    

    
    

    $link = $xml->channel->item[$i]->link;

    $begin =$xml->channel->item[$i]->description;    
$woorden = explode(' ',$begin); // Break words into array    
$hoeveelwoorden = count($woorden); // Find out how many
unset($woorden[$hoeveelwoorden-1]); // remove the last one (-1 because of zero-index)
unset($woorden[$hoeveelwoorden-2]);
unset($woorden[$hoeveelwoorden-3]);
unset($woorden[$hoeveelwoorden-4]);
unset($woorden[$hoeveelwoorden-5]);
unset($woorden[$hoeveelwoorden-6]);
unset($woorden[$hoeveelwoorden-7]);
unset($woorden[$hoeveelwoorden-8]);
unset($woorden[$hoeveelwoorden-9]);
unset($woorden[$hoeveelwoorden-10]);
unset($woorden[$hoeveelwoorden-11]);
unset($woorden[$hoeveelwoorden-12]);
unset($woorden[$hoeveelwoorden-13]);
unset($woorden[$hoeveelwoorden-14]);
unset($woorden[$hoeveelwoorden-15]);
unset($woorden[$hoeveelwoorden-16]);
unset($woorden[$hoeveelwoorden-17]);  
  
$description = implode(' ',$woorden); //put back together
$vorige = $i - 1;
$volgende = $i + 1;
   
    $url = $xml->channel->item[$i]->url;
    $author = $xml->channel->item[$i]->author;
    $publication = $xml->channel->item[$i]->publication;

    
    $html .="<section id='pub $i'>";

// $html .= "<div id='pubi'>$xml->channel->item[$i]";

$html .="<div class='w3-row' >
            <div class='w3-container w3-quarter w3-theme1 w3-hide-small' id='links'>
            <a href='#pub $vorige'>
<svg height='1600' width='450'>
  <polyline points='250,600 0,850 250,1100 250,1050 50,850 250,650 250,600' style='fill:#fff5dc;stroke:#fff5dc;stroke-width:3' />

  <polyline points='380,600 130,850 380,1100 380,1050 180,850 380,650 380,600' style='fill:#fff5dc;stroke:#fff5dc;stroke-width:3' />
    <text x='250' y='380' fill='#fff5dc'>Vorige?
  <animateMotion path='M 75 50 L 75 150' dur='10s' fill='freeze'/>
   </text>
  Sorry, your browser does not support inline SVG.
</svg>

</a></div>";

  
$html .="<div class='w3-container w3-half w3-theme' id='mid'><h2>$title</h2>
    <p id='plaats'>$path[5]</p>
    <p id='description'>$description</p>";
      $html .= "<a href='$applyurl#apply_form'><button class='apply_button'>Solliciteren</button></a>";
    $html .= "<p>Of stuur een mail naar <a href='mailto:$author'>$author</a></p></div>";
$html .="<div class='w3-container w3-quarter w3-theme1 w3-hide-small' id='rechts'>
         <a href='#pub $volgende'>
         
         <svg height='1200' width='455'>
  <polyline points='250,600 450,850 250,1100 250,1050 400,850 250,650 250,600' style='fill:#fff5dc;stroke:#fff5dc;stroke-width:3' />
  <polyline points='120,600 320,850 120,1100 120,1050 270,850 120,650 120,600' style='fill:#fff5dc;stroke:#fff5dc;stroke-width:3' />
    <text x='250' y='380' fill='#fff5dc'>Volgende?
  <animateMotion path='M -225 50 L -225 150' dur='10s' fill='freeze' />
   </text>
  Sorry, your browser does not support inline SVG.
</svg></a></div>
</div>";
          
    $html .="</section><br><br><br><br><hr/>";
}

            
              
                     


              
echo $html;
        
?>
    </div>

</body>

</html>