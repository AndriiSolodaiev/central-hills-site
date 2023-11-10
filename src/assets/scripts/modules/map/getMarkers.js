import markersFromPrevSite from './markersFromPrevSite';

const baseFolder = window.location.href.match(/localhost/)
  ? './assets/images/markers/'
  : '/wp-content/themes/rams/assets/images/markers/';

const markersAdresses = {
  main: `${baseFolder}main.svg`,
  hospital: `${baseFolder}hospital.svg`,
  cafe: `${baseFolder}cafe.svg`,
  // shop: `${baseFolder}shop.svg`,
  // park: `${baseFolder}park.svg`,
  school: `${baseFolder}school.svg`,
  education: `${baseFolder}education.svg`,
  medicine: `${baseFolder}medicine.svg`,
  market: `${baseFolder}market.svg`,
  transport: `${baseFolder}transport.svg`,
  ramsbeyondistanbul: `${baseFolder}ramsbeyondistanbul.svg`,
  ramscity: `${baseFolder}ramscity.svg`,
  quattro: `${baseFolder}quattro.svg`,
  bayramoglu: `${baseFolder}bayramoglu.svg`,
};

const markerPopupStyle = `
style="
background: #ffffff;
color:#000000;
font-weight: bold;
padding:5px 10px;
font-size: 16px;
line-height: 120%;"
`;

export async function fetchMarkersData(google) {
  const buildLogoSize =
    window.innerWidth > 768 ? new google.maps.Size(150, 70) : new google.maps.Size(120, 50);
  const buildLogoSizeMain =
    window.innerWidth > 768 ? new google.maps.Size(90, 90) : new google.maps.Size(60, 60);
  const sendData = new FormData();
  sendData.append('action', 'infrastructure');
  const url = window.location.href.match(/localhost/)
    ? 'https://central-park-wp.smarto.com.ua/wp-admin/admin-ajax.php'
    : '/wp-admin/admin-ajax.php';
  // let markersData = window.location.href.match(/localhost|smarto/) ? Promise.resolve(mockData()) : await fetch(url, {
  //   method: 'POST',
  //   body: sendData,
  // });
  let markersData = Promise.resolve(mockData());
  // markersData = window.location.href.match(/localhost|smarto/) ? mockData() : await markersData.json();
  markersData = mockData();
  if (!markersData) {
    console.warn('Wrong data recieved');
    return;
  }

  let formatedMarkersDataForMap = markersData.reduce((acc, el) => {
    if (!el.list) return acc;
    el.list.forEach(marker => {
      acc.push({
        content: `<div ${markerPopupStyle}>${marker.name}</div>`,
        position: {
          lat: marker.coordinations.latitude,
          lng: marker.coordinations.elevation,
        },
        type: el.code,
        id: marker.id,
        zIndex: 2,
        icon: {
          url: markersAdresses[el.code],
          scaledSize: el.code === 'main' ? buildLogoSizeMain : buildLogoSize,
        },
      });
    });
    return acc;
  }, []);

  // console.log(formatedMarkersDataForMap);

  markersFromPrevSite().forEach(marker => {
    formatedMarkersDataForMap.push({
      content: marker.description,
      position: {
        lat: marker.lat,
        lng: marker.lng,
      },
      type: marker.category,
      id: marker.id,
      zIndex: 1,
      icon: { url: markersAdresses[marker.category], scaledSize: buildLogoSize },
    });
  });

  return formatedMarkersDataForMap;
}

function mockData() {
  return [
    // {
    //     "name": "RAMS City Haliç",
    //     "code": "ramscity",
    //     "list": [
    //         {
    //             "name": "RAMS City Haliç",
    //             "id": "12312312",
    //             "coordinations": {
    //                 "latitude": "41.0334469",
    //                 "elevation": "28.9212694"
    //             }
    //         }
    //     ]
    // },
    // {
    //     "name": "RAMS BEYOND İSTANBUL",
    //     "code": "ramsbeyondistanbul",
    //     "list": [
    //         {
    //             "name": "RAMS BEYOND İSTANBUL",
    //             "id": "12312312",
    //             "coordinations": {
    //                 "latitude": "41.109657",
    //                 "elevation": "29.023951"
    //             }
    //         }
    //     ]
    // },

    {
      name: 'Dobrobut',
      code: 'hospital',
      list: [
        {
          name:
            "<a style='text-decoration:none; color: #344742; font-weight: bold' target='_blank' href='https://maps.app.goo.gl/cmxmrfjsZZJhzVrM7'>Dobrobut</a>",
          id: '01',
          coordinations: {
            latitude: '50.4112674',
            elevation: '30.5424209',
          },
        },
      ],
    },
    {
      name: 'Dobrobut',
      code: 'school',
      list: [
        {
          name:
            "<a style='text-decoration:none; color: #344742; font-weight: bold' target='_blank' href='https://maps.app.goo.gl/cmxmrfjsZZJhzVrM7'>Dobrobut</a>",
          id: '02',
          coordinations: {
            latitude: '50.3967934',
            elevation: '30.4999741',
          },
        },
      ],
    },
    {
      name: 'McDonald`s',
      code: 'cafe',
      list: [
        {
          name:
            "<a style='text-decoration:none; color: #344742; font-weight: bold' target='_blank' href='https://maps.app.goo.gl/NhVG4gS2BaAkK5Vf7'>McDonald`s</a>",
          id: '03',
          coordinations: {
            latitude: '50.4062762',
            elevation: '30.5164642',
          },
        },
      ],
    },
    {
      name: 'Centrall Hills',
      code: 'main',
      list: [
        {
          name:
            "<a style='text-decoration:none; color: #344742; font-weight: bold' target='_blank' href='https://maps.app.goo.gl/SBUaNvzaUVd5tmNp8'>Central Hills</a>",
          id: '00',
          coordinations: {
            latitude: '50.3873153',
            elevation: '30.5352754',
          },
        },
      ],
      zIndex: 10,
    },
  ];
}
