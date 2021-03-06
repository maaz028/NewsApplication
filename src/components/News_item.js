import React, { Component } from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News_item extends Component {

   static propTypes = {
    category: PropTypes.string.isRequired
}

    
    
    constructor()
    {
        
        super();
        console.log(this.category)
        this.data = {
            "status": "ok",
            "totalResults": 768,
            
            "articles": [
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Jody Serrano",
                    "title": "Apple: Don’t Attach Your iPhone to Motorcycles, Mopeds, or Scooters if You Want the Camera to Last",
                    "description": "Apple has a message for iPhone users with highpower motorcycles, mopeds, and scooters: Don’t attach your phone to them you value your camera. Read more...",
                    "url": "https://gizmodo.com/appledontattachyouriphonetomotorcyclesmopeds1847660042",
                    "urlToImage": "https://i.kinjaimg.com/gawkermedia/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a3e79e09eb7214e71c760c2a9dcc34ed.jpg",
                    "publishedAt": "20210912T02:00:00Z",
                    "content": "Apple has a message for iPhone users with highpower motorcycles, mopeds, and scooters: Dont attach your phone to them you value your camera.\r\nIn a support document with a uniquelylong and oddlyspe… [+2587 chars]"
                },
                
                {
                    
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "In a New York minute, everything changed for U.S. Open champion Raducanu  Reuters",
                    "description": "Emma Raducanu's life changed in a New York minute on Saturday when she beat Canadian Leylah Fernandez 64 63 in the U.S. Open final, capping her improbable rise from 150thranked qualifier to Grand Slam champion.",
                    "url": "https://www.reuters.com/lifestyle/sports/newyorkminuteeverythingchangedusopenchampionraducanu20210912/",
                    "urlToImage": "https://www.reuters.com/resizer/fFqqLUJopCkZfpaEvxp_oDo9TXM=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/4STONGBATBKG5GCOKHTY5J34BE.jpg",
                    "publishedAt": "20210912T02:25:00Z",
                    "content": "NEW YORK, Sept 11 (Reuters)  Emma Raducanu's life changed in a New York minute on Saturday when she beat Canadian Leylah Fernandez 64 63 in the U.S. Open final, capping her improbable rise from 15… [+3469 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Android Central"
                    },
                    "author": "Kevin Lynch",
                    "title": "How to watch the Djokovic vs Medvedev: Live stream the US Open 2021 final o",
                    "description": "History beckons for Novak Djokovic as the Serbian legend goes in search of two significant tennis records in this afternoon's grand finale at Flushing Meadows.\n\nRead on to find out how to get a 2021 US Open live stream and watch Novak Djokovic vs Daniil Medve…",
                    "url": "https://www.androidcentral.com/djokovicvsmedvedevhowwatch2021usopenmenssinglesfinalonlineanywhere",
                    "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/09/flushing_meadows.jpg",
                    "publishedAt": "20210912T16:00:02Z",
                    "content": "History beckons for Novak Djokovic as the Serbian legend goes in search of two significant tennis records in this afternoon's grand finale at Flushing Meadows.\r\nRead on to find out how to get a 2021 … [+5512 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "The Guardian"
                    },
                    "author": "Jay Rayner",
                    "title": "The Pigs, Norfolk: ‘Lives up to its name’ – restaurant review",
                    "description": "If you like all things piggy, then you will feel right at home hereThe Pigs, Edgefield near Holt, Norfolk NR24 2RL (01263 587634). Starters £4.50 or £8 per head for a selection, mains £14£15.50, desserts £6.25, wines from £21Restaurant names matter. If you r…",
                    "url": "https://amp.theguardian.com/food/2021/sep/12/jayraynerrestaurantreviewthepigsnorfolklivesuptoitsname",
                    "urlToImage": "https://i.guim.co.uk/img/media/758b8ab767ade6bcd54bfacdd492b5684ea9b10d/0_884_8280_4969/master/8280.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=bcf945a42a2a66fe5441cba6d14ff98d",
                    "publishedAt": "20210912T05:00:44Z",
                    "content": "The Pigs, Edgefield near Holt, Norfolk NR24 2RL (01263 587634). Starters £4.50 or £8 per head for a selection, mains £14£15.50, desserts £6.25, wines from £21\r\nRestaurant names matter. If you refere… [+7999 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "The Guardian"
                    },
                    "author": "Edward Helmore in New York",
                    "title": "New York gossip queen Cindy Adams: ‘My loyalty is to anyone who’ll give me the best quote’",
                    "description": "The 91yearold tabloid columnist, the star of a new Showtime documentary, on Murdoch, Trump – and why New York is the capital of the worldCindy Adams, the longserving gossip queen of the New York Post, was battling Hurricane Ida in her Manhattan apartment. …",
                    "url": "https://amp.theguardian.com/lifeandstyle/2021/sep/12/cindyadamsnewyorkpostgossiptabloidtrump",
                    "urlToImage": "https://i.guim.co.uk/img/media/065181ce473a8a1bce52889b484d7ffc7329f788/0_10_2528_1517/master/2528.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bb54f69adae8f7e8c84a951926e86817",
                    "publishedAt": "20210912T05:30:01Z",
                    "content": "Cindy Adams, the longserving gossip queen of the New York Post, was battling Hurricane Ida in her Manhattan apartment. Her terriers were disturbed, and she was not sleeping. A glassenclosed penthou… [+7656 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "MacRumors"
                    },
                    "author": "Sami Fathi",
                    "title": "Kuo: ThirdGeneration AirPods to be Announced During 'California Streaming' Apple Event",
                    "description": "Apple will announce its thirdgeneration AirPods, featuring a new design similar to the AirPods Pro but lacking in \"Pro\" features during its \"California streaming\" Apple event on Tuesday, September 14, Apple analyst MingChi Kuo said today in an investors not…",
                    "url": "https://www.macrumors.com/2021/09/12/kuoairpods3appleeventtuesday/",
                    "urlToImage": "https://images.macrumors.com/t/ax03InANhEqrwxdzgqhXY3bT4E=/2500x/https://images.macrumors.com/articlenew/2021/01/AirPodsGen3Feature.jpg",
                    "publishedAt": "20210912T13:40:39Z",
                    "content": "Apple will announce its thirdgeneration AirPods, featuring a new design similar to the AirPods Pro but lacking in \"Pro\" features during its \"California streaming\" Apple event on Tuesday, September 1… [+1053 chars]"
                },
                
                {
                    
                    "source": {
                        "id": "businessinsider",
                        "name": "Business Insider"
                    },
                    "author": "fagustin@insider.com (Francis Agustin)",
                    "title": "Surgeon general Murthy says the Biden administration's COVID19 vaccine mandate for employers is 'legal and 'appropriate'",
                    "description": "\"We all in the private sector have to do everything we can to tackle this virus,\" Dr. Vivek Murthy said on Sunday.",
                    "url": "https://www.businessinsider.com/surgeongeneraldefendsbidenslatestvaccinemandates20219",
                    "urlToImage": "https://i.insider.com/5fb682c250e71a001155626b?width=1200&format=jpeg",
                    "publishedAt": "20210912T17:07:59Z",
                    "content": "Surgeon General Dr. Vivek Murthy on Sunday defended new vaccine mandates from the White House, saying it is both appropriate and legal to require employers with more than 100 employees to mandate COV… [+2791 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Entrepreneur"
                    },
                    "author": "Sean McDermott",
                    "title": "How to Transform Your Office Into a Collaboration Destination",
                    "description": "By ditching the traditional officecentric workplace for a compelling gathering space, you will reap the longterm benefits.",
                    "url": "https://www.entrepreneur.com/article/377540",
                    "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1631211603GettyImages1271693229.jpg",
                    "publishedAt": "20210912T15:00:00Z",
                    "content": "70% of executives plan to get employees back to their desks at least parttime by fall 2021, according to a LaSalle Network survey. In fact, JPMorgan and Goldman Sachs are already well on their way t… [+7312 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Aawsat.com"
                    },
                    "author": "",
                    "title": "Tae Kim  Apple AppStore Ruling Should Make Tim Cook Sweat  Asharq Alawsat  English",
                    "description": "<ol><li>Tae Kim  Apple AppStore Ruling Should Make Tim Cook Sweat  Asharq Alawsat  English\r\n</li><li>Epic ruling invites future efforts to paint Apple as monopolist, experts say  CTV News\r\n</li><li>Epic Is Turning A W Into An L After Apple Court Case Ruli…",
                    "url": "https://english.aawsat.com/home/article/3184476/taekim/appleappstorerulingshouldmaketimcooksweat",
                    "urlToImage": "https://english.aawsat.com/sites/default/files/styles/large/public/2020/07/12/taekim.jpg?itok=Re5iToM7",
                    "publishedAt": "20210912T05:09:21Z",
                    "content": "Apple Inc.s dominance over the mobileapp economy has just suffered its first significant setback. It could mark the beginning of a real antitrust reckoning for the technology giant that may benefit … [+2739 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Hipertextual"
                    },
                    "author": "José María López",
                    "title": "La guerra de los procesadores: CISC versus RISC (o x86 contra ARM)",
                    "description": "Si has tenido PC toda tu vida, muy probablemente su procesador haya sido de arquitectura x86. O x86/64 si es reciente. Sus fabricantes, Intel o AMD, mayoritariamente. En caso de haber tenido ordenadores Apple, puede que hayas trabajado con distintos procesado…",
                    "url": "https://hipertextual.com/2021/09/procesadoresriscciscarm",
                    "urlToImage": "https://i1.wp.com/hipertextual.com/wpcontent/uploads/2021/09/cpuchipprocessorcomputer.jpeg?fit=2000%2C1333&ssl=1",
                    "publishedAt": "20210912T10:30:00Z",
                    "content": "Si has tenido PC toda tu vida, muy probablemente su procesador haya sido de arquitectura x86. O x86/64 si es reciente. Sus fabricantes, Intel o AMD, mayoritariamente. En caso de haber tenido ordenado… [+9891 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Hipertextual"
                    },
                    "author": "Luis del Barco",
                    "title": "El iPhone 13 llegaría con una grata sorpresa en su almacenamiento",
                    "description": "El iPhone 13 podría decir adiós y muy buenas a los 64GB de almacenamiento. Una información que llega a pocos días de la presentación oficial de los dispositivos y que, de confirmarse, será muy bien recibida por parte del grueso de usuarios. Dicho reporte lleg…",
                    "url": "https://hipertextual.com/2021/09/iphone1364gb",
                    "urlToImage": "https://hipertextual.com/wpcontent/uploads/2021/09/iPhone13.jpg",
                    "publishedAt": "20210912T16:22:02Z",
                    "content": "El iPhone 13 podría decir adiós y muy buenas a los 64GB de almacenamiento. Una información que llega a pocos días de la presentación oficial de los dispositivos y que, de confirmarse, será muy bien r… [+2037 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Xataka.com"
                    },
                    "author": "Eva Rodríguez de Luis",
                    "title": "Cómo optimizar la toma de notas en clase: guía de compra de dispositivos para escribir a mano y tener tus apuntes en digital",
                    "description": "Aunque escribir directamente en el portátil te permite tener tus apuntes limpios, ordenados y preparados para la modificación infinita, la mayoría seguimos apostando por el método de toda la vida: el clásico papel y boli. No obstante, puedes tener lo mejor de…",
                    "url": "https://www.xataka.com/seleccion/comooptimizartomanotasclaseguiacompradispositivosparaescribiramanotenertusapuntesdigital",
                    "urlToImage": "https://i.blogs.es/964a4a/remarkable203uso01/840_560.jpg",
                    "publishedAt": "20210912T15:00:59Z",
                    "content": "Aunque escribir directamente en el portátil te permite tener tus apuntes limpios, ordenados y preparados para la modificación infinita, la mayoría seguimos apostando por el método de toda la vida: el… [+9974 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "Techstage.de"
                    },
                    "author": "Michael Schmithäuser",
                    "title": "TechStage | Handys zum Zocken: Smartphones ab 180 Euro für Mobile Games",
                    "description": "Aktuelle Mobile Games wie Diablo oder Fortnite bieten Unterhaltung auf KonsolenNiveau. TechStage zeigt, welche Smartphones sich ab 180 Euro eignen.",
                    "url": "https://www.techstage.de/ratgeber/handyszumzockensmartphonesab180eurofurmobilegames/nk6vq2r#article",
                    "urlToImage": "https://ocdn.eu/pulscmstransforms/1/TNFktkpTURBXy81NzFhMDEwYTQzYzJjNGMwYzgzYTcwZmUzN2ExZDYwOS5qcGeSlQMAOc0PN80IjpMFzQSwzQJY",
                    "publishedAt": "20210912T11:00:00Z",
                    "content": "Genauso wie PC und Konsolenspiele stellen auch AAATitel für Smartphones, die jüngst zur Gamescom 2021 vorgestellt wurden, bestimmte Mindestanforderungen an die Hardware des Handys. Während simple B… [+10696 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "9to5Mac"
                    },
                    "author": "Benjamin Mayo",
                    "title": "Apple TV+ Guide: Here are all the Apple TV shows and movies available now",
                    "description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month. Here’s every Apple original television show and movie avai…",
                    "url": "http://9to5mac.com/2021/09/12/appletvplustvshowsmoviesguide/",
                    "urlToImage": "https://i2.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2019/12/appletvplus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "20210912T08:59:50Z",
                    "content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month… [+28799 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "9to5Mac"
                    },
                    "author": "José Adorno",
                    "title": "Kuo: Apple Watch Series 7 shipment delay ‘not significant’ and won’t impact release schedule",
                    "description": "As we are a few days away from Apple introducing the new iPhone 13 and Apple Watch Series 7, reliable analyst MingChi Kuo offered a new insight about Series 7 mass production delay and the impact on the release schedule.\n more…\nThe post Kuo: Apple Watch Seri…",
                    "url": "http://9to5mac.com/2021/09/12/kuoapplewatchseries7shipmentdelaynotsignificantandwontimpactreleaseschedule/",
                    "urlToImage": "https://i2.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2020/12/AppleWatchSeries7concept.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "20210912T13:38:47Z",
                    "content": "As we are a few days away from Apple introducing the new iPhone 13 and Apple Watch Series 7, reliable analyst MingChi Kuo offered a new insight about Series 7 mass production delay and the impact on… [+2009 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "9to5Mac"
                    },
                    "author": "Chance Miller",
                    "title": "Report: M1X MacBook Pros to hit shelves in ‘the next several weeks’",
                    "description": "While Apple is expected to announce the iPhone 13 and Apple Watch Series 7 on Tuesday, it has additional announcements in store for later this fall. Perhaps most notably, this includes the longawaited 14inch and 16inch MacBook Pros powered by the M1X proce…",
                    "url": "http://9to5mac.com/2021/09/12/reportm1xmacbookprostohitshelvesinthenextseveralweeks/",
                    "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2021/08/14inchMacBookProCPU.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "20210912T13:16:00Z",
                    "content": "While Apple is expected to announce the iPhone 13 and Apple Watch Series 7 on Tuesday, it has additional announcements in store for later this fall. Perhaps most notably, this includes the longawait… [+1790 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "9to5Mac"
                    },
                    "author": "Chance Miller",
                    "title": "Kuo: iPhone 13 to drop 64GB storage size, Pro models to offer 1TB option",
                    "description": "Reliable Apple analyst MingChi Kuo is out with a new investor report this morning outlining expectations for the iPhone 13, Apple Watch Series 7, and AirPods 3. Kuo corroborates that the iPhone 13 Pro and iPhone 13 Pro Max will be available in an allnew 1TB…",
                    "url": "http://9to5mac.com/2021/09/12/kuoiphone13todrop64gbstoragesizepromodelstooffer1tboption/",
                    "urlToImage": "https://i1.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2021/06/iPhone13dummies.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "20210912T13:24:26Z",
                    "content": "Reliable Apple analyst MingChi Kuo is out with a new investor report this morning outlining expectations for the iPhone 13, Apple Watch Series 7, and AirPods 3. Kuo corroborates that the iPhone 13 P… [+1770 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "9to5Mac"
                    },
                    "author": "José Adorno",
                    "title": "iOS 14 users complain about ‘Only one accessory can be used at a time’ error with CarPlay",
                    "description": "We’re almost at the end of the iOS 14 cycle but there’s a bug that still affects plenty of users on the current iPhone’s operating system. People across the internet have shared that when connecting the iPhone to their cars, sometimes they get an “Only one ac…",
                    "url": "http://9to5mac.com/2021/09/12/ios14userscomplainaboutonlyoneaccessorycanbeusedatatimeerrorwithcarplay/",
                    "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2021/09/ios14carplaybug9to5mac1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "20210912T13:52:32Z",
                    "content": "We’re almost at the end of the iOS 14 cycle but there’s a bug that still affects plenty of users on the current iPhone’s operating system. People across the internet have shared that when connecting … [+2097 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "9to5Mac"
                    },
                    "author": "Benjamin Mayo",
                    "title": "Kuo: AirPods 3 to be announced at September event, at possible higher price as AirPods 2 will remain in the lineup",
                    "description": "In a report from reliable analyst MingChi Kuo today, Apple is said to be announcing the new generation of AirPods as part of Tuesday’s iPhone 13 event. The new ‘AirPods 3’ will be the new version of Apple’s AirPods earbuds, which were last refreshed in March…",
                    "url": "http://9to5mac.com/2021/09/12/kuoairpods3tobeannouncedatseptembereventairpods2toremaininthelineup/",
                    "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2021/03/ClaimedAirPods3renders.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "20210912T13:21:26Z",
                    "content": "In a report from reliable analyst MingChi Kuo today, Apple is said to be announcing the new generation of AirPods as part of Tuesday’s iPhone 13 event. The new ‘AirPods 3’ will be the new version of… [+835 chars]"
                },
                
                {
                    
                    "source": {
                        "id": null,
                        "name": "9to5Mac"
                    },
                    "author": "Bradley Chambers",
                    "title": "Comment: Spotify is focused on podcasts, but its app falls short for power users",
                    "description": "Spotify’s ambitions from expanding from primarily a music platform to leveraging podcast and audiobooks are well known. Music royalties are expensive, so it makes sense for Spotify to focus on getting listeners to spend more time listening to content that isn…",
                    "url": "http://9to5mac.com/2021/09/12/commentspotifyisfocusedonpodcastsbutitsappfallsshortforpowerusers/",
                    "urlToImage": "https://i2.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2021/09/Spotify.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "20210912T16:00:00Z",
                    "content": "Spotifys ambitions from expanding from primarily a music platform to leveraging podcast and audiobooks are well known. Music royalties are expensive, so it makes sense for Spotify to focus on getting… [+4804 chars]"
                }
            ]
            }
        console.log('hello i am a constructor')
        this.state = {
            articles: this.articles,
            page : 1,
            total_results : 0,
            loadder:false
        }
        
    }
    async componentDidMount()
    {
        
        
        this.setState({loadder:true})
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=685626cbbcb040fbaca0357964c26b84&category=${this.props.category}&page=${this.state.page}&pageSize=12`
        let data = await fetch(url)
        let details  = await data.json()
        this.setState({loadder:false})
        this.setState({articles:details.articles, total_results:details.totalResults})
       
    }

    forward = ()=>{
        this.setState({page: this.state.page =  this.state.page + 1})
        if (this.state.page <= Math.ceil(this.state.total_results/6))
        {

            this.componentDidMount()
            
        }
        console.log(this.state.page)
    }
    previous = ()=>{
        this.setState({page: this.state.page = this.state.page - 1})
        this.componentDidMount()
        console.log(this.state.page)
        
    }

     
    render() {
       
        return (
            <>
            <div className='background'>
           {this.state.loadder===true && <Spinner/>}
           <h1 className='text-center'>Top HeadLines - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1,)}</h1>
            <div className="container">
            <div className="row">
           {this.state.articles?this.state.articles.map((element)=>{
               return  <div className="my-4 col-md-4 " key={element.url}>
               <div className="card"  >
                   <img style={{ height:'177px'}} src={element.urlToImage?element.urlToImage:"https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/x5qxht3mhwmldwru1b0l"} className="cardimgtop" alt="loading"/>
                   <div className="cardbody">
                   <h4 className="cardtitle">{element.title.slice(0,100)}</h4>
                   <p className="cardtext">{element.description?element.description.slice(0,200):"Uptick in violence comes amid high tensions, as Israel captures 4 of 6 Palestinian fugitives and Gaza ceasefire deal breaks down"}</p>
                   <p className='cardtext' ><span className="badge bg-success cardtext my-2">Author: <strong>{element.author?element.author:'Unknown'}</strong> </span><br/><span className="badge bg-primary cardtext">{new Date(element.publishedAt).toGMTString()}</span></p>
                   
                   <a href={element.url} className ="btn btn-dark mx-2 my-2 readmore">Read More</a>
       
                   </div>
                   <div>
                   <span style={{zIndex:'1'}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {element.source.name}
    <span className="visually-hidden">unread messages</span>
  </span>
  </div>
               </div>
               </div>
           }):''} 
           
                </div>
                </div>
                <div className='buttons '>
            <button disabled={this.state.page <= 1} onClick={this.previous} type="button" className="btn btn-danger mx-6">&larr; Previous</button>
            <button disabled={this.state.page >= Math.ceil(this.state.total_results/10)} onClick={this.forward} type="button" className="btn btn-danger mx-6">Forward &rarr;</button>
            </div>
            </div>
                {/* <News forward = {this.forward}/> */}
            </>
        )
    }
}

export default News_item
