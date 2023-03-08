import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {

  hotelList = [
    {
      image: 'https://m.hotels.ng/img/h999567/562/422/b1/kapital-hotel-999567-32.jpg',
      name: 'Kapital Hotel',
      address: 'No. 6/7, Otunba Bayo Arinle Street, Ijebu Ode, Onirugba, Ijebu Ode, Ijebu Ode, Ogun',
      href: 'https://hotels.ng/hotel/999567-kapital-hotel-ogun',
    },
    {
      image: 'https://cf.bstatic.com/xdata/images/hotel/square600/411195427.webp?k=0fd73b3328ccf945c58400556856b057c30c3b325b79b2ef4c26261389f44a6c&o=&s=1',
      name: 'Conference Hotel & Suites Ijebu',
      address: 'Plot 1A and 1B, Conference Avenue, GRA, Ogun State, Nigeria., 120213 Ijebu Ode, Nigeria',
      href: 'https://conferencehotelnigeria.com/ijebu-ode/',
    },
    {
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/112721790.jpg?k=a6dbbaa7f989a629f468931292c20400407997de7ce7f35377f4beec9bd34e1f&o=&hp=1',
      name: 'Grand Inn & Suites',
      address: '3 Gateway Stadium Road, GRA, Ogun State, 120231 Ijebu Ode, Nigeria',
      href: 'https://www.agoda.com/grand-inn-suites/hotel/ijebu-ode-ng.html',
    },
    {
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/352041762.jpg?k=c7206fcecd9d6c2321102405de3ef7cfbb09634b4b3cf8a5fd0b09ef9738cf85&o=&hp=1',
      name: 'TD RESIDENCE INN',
      address: ' 1, Luba Road, GRA, Opposite NTA, Ijebu Ode, Ogun State, Nigeria Opposite NTA, Ijebu Ode, Ogun State, Nigeria, 120101 Ijebu Ode, Nigeria',
      href: 'https://www.ehotelsreviews.com/td-residence-inn-8412699-en',
    },
    {
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/423659118.jpg?k=c154a91d8871fe25a5b07a07bada5d4fb696c25392f84980856110367f8c8348&o=&hp=1',
      name: 'MASRoyal Homes',
      address: ' MASRoyal Homes, off Luba Comprehensive School, behind Ayinde Oloko Street, 234001 Ijebu Ode, Nigeria',
      href: 'https://www.booking.com/hotel/ng/masroyal-homes.html?aid=304142&label=gen173rf-1FCAMopwFCCWlqZWJ1LW9kZUgzWANopwGIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGiAhBzZWFyY2guYnJhdmUuY29tqAIDuALAnKGgBsACAdICJGM5YTM2ZDNhLWRjZWYtNDA5Ny05MWU0LTA1ZDg5NzBhMjc0M9gCBeACAQ&sid=5c60ef0fe840180d75c34dbbbd3719eb&dest_id=-2011412;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;hpos=2;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1678268399;srpvid=be4c43f5199500f5;type=total;ucfs=1&#hotelTmpl',
    },
    
  ]
  constructor(){}
}
