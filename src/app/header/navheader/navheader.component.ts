import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'
import 'hammerjs'
@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var button;
    var gesture;
    var nav;
    $(document).ready(function(){
      nav= document.getElementById("sidenav");
      button = document.getElementById("sidebar-swipe3");
      gesture = new Hammer(button);

      gesture.on("swiperight", function(ev) {
        if ( $( '#sidenav' ).hasClass( "active" ) ) {
          console.log("already active");
      }
      else{
        $( '#sidenav' ).addClass( "active" );
        $( '.sidebar-swipe' ).css('width',"100%");
        $( '.sidebar-swipe' ).css('left',"150px")
      }
        
});

gesture.on("hammer.input", function(ev) {
  if ( $( '#sidenav' ).hasClass( "active" ) ) {
    
    $( '#sidenav' ).removeClass( "active" );
    $( '.sidebar-swipe' ).css('width',"10%");
    $( '.sidebar-swipe' ).css('left',"0px")
}
else{
  console.log("already removed");
}
  
});
      $('.menu-toggle').click(function(){
        if ( $( '#sidenav' ).hasClass( "active" ) ) {
          $( '#sidenav' ).removeClass( "active" );
          $( '.sidebar-swipe' ).css('width',"10%");
          $( '.sidebar-swipe' ).css('left',"0px")
      }
      else{
        $( '#sidenav' ).addClass( "active" );
        $( '.sidebar-swipe' ).css('width',"100%");
        $( '.sidebar-swipe' ).css('left',"150px");
      }
       
      });
      $('ul li a').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        
      })
    });
    
  }
  
  
}
