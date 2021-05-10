import React, { useEffect, useState } from 'react';

import './styles.scss';

import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';

import video01 from '../../assets/videos/01.mp4';

const Menuboard = () => {
  const [transitonTime, setTransitonTime] = useState(0);
  const [widthTotal, setWidthTotal] = useState(0);
  const [groups, setGroups] = useState([]);
  const [groupSelected, setGroupSelected] = useState({});
  const [advertisements, setAdvertisements] = useState([]);

  const screenConfigurations = { width: 7680, height: 1080 };
  const advertisingAPI = [
    {
      time: 10000,
      itens: [
        {
          id: 1,
          name: 'propaganda 1',
          bg: bg1,
          type: 'image',
          informations: [
            { vl: 'O seu sorvete', type: 'title', posX: 1100, posY: 350 },
            { vl: 10, type: 'price', posX: 100, posY: 550 },
            { vl: 12.5, type: 'price', posX: 300, posY: 550 },
          ],
          screens: 1,
        },
        {
          id: 2,
          name: 'propaganda 2',
          bg: video01,
          type: 'video',
          informations: [
            { vl: 'O seu sorvete', type: 'title', posX: 1100, posY: 350 },
            { vl: 20, type: 'price', posX: 100, posY: 550 },
          ],
          screens: 1,
        },
        {
          id: 3,
          name: 'propaganda 3',
          bg: bg3,
          type: 'image',
          informations: [
            { vl: 'O seu sorvete', type: 'title', posX: 2300, posY: 950 },
            { vl: 10, type: 'price', posX: 100, posY: 550 },
          ],
          screens: 2,
        },
      ],
    },
    {
      time: 1000,
      itens: [
        {
          id: 4,
          name: 'propaganda 4',
          bg: bg3,
          type: 'image',
          informations: [
            { vl: 'O seu sorvete', type: 'title', posX: 1100, posY: 350 },
            { vl: 10, type: 'price', posX: 100, posY: 550 },
            { vl: 15, type: 'price', posX: 190, posY: 50 },
          ],
          screens: 2,
        },
        {
          id: 5,
          name: 'propaganda 5',
          bg: bg3,
          type: 'image',
          informations: [{ vl: 10, type: 'price', posX: 100, posY: 550 }],
          screens: 2,
        },
      ],
    },
  ];

  useEffect(() => {
    setWidthTotal(screenConfigurations.width);
  }, [screenConfigurations.width]);

  useEffect(() => {
    setTransitonTime(10000);
    setGroups(advertisingAPI);
  }, []);

  let sequency = 0;
  useEffect(() => {
    if (groups.length > 0) {
      setGroupSelected(groups[0]);

      setInterval(() => {
        if (sequency + 1 === groups.length) {
          sequency = 0;
        } else sequency = sequency + 1;

        setGroupSelected(groups[sequency]);
      }, transitonTime);
    }
  }, [groups]);

  useEffect(() => {
    if (groupSelected.itens) {
      setAdvertisements(groupSelected.itens);
    }
  }, [groupSelected]);

  useEffect(() => {
    //if (advertisements.length > 0) console.log(advertisements);
  }, [advertisements]);

  return (
    <>
      <section
        className="menuboard-screen"
        style={{ minWidth: widthTotal, maxWidth: widthTotal }}
      >
        {advertisements.map(adv => (
          <div
            key={adv.id}
            className={`one-screen ${adv.screens == 2 ? 'two-screens' : ''} ${
              adv.screens == 3 ? 'three-screens' : ''
            } ${adv.screens == 4 ? 'four-screens' : ''}`}
          >
            {adv.informations.map(inf => (
              <span
                key={inf.vl}
                className="vl"
                style={{ marginLeft: inf.posX, marginTop: inf.posY }}
              >
                {inf.vl}
              </span>
            ))}

            {adv.type == 'image' && <img src={adv.bg} alt={adv.name} />}

            {adv.type == 'video' && (
              <video className="videoTag" autoPlay loop muted>
                <source src={adv.bg} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Menuboard;
