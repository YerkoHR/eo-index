import React from "react";
import Layout from "../components/Layout";
import infoScreen from "../images/infoScreen.jpg";
import status from "../images/status.jpg";
import weaponDamage from "../images/weaponDamage.jpg";
import binds from "../images/binds.jpg";

const StatusPage = () => (
  <Layout title="Combat Screen" subTitle="Variables">
    <div className="content">
      <div className="card card__large">
        <div className="card__large__top">
          <div className="card-image">
            <img className="img__all" src={infoScreen} alt="infoScreen" />
          </div>
          <div className="card-content">
            <h3>Ailments</h3>
            <ul>
              <li>Stun: Cannot act or dodge for the rest of this turn.</li>
              <li>
                Instant Death: When HP reaches 0, or inflicted by certain
                skills. Cannot attack, use skills, or receive damage. The party
                loses if all members are dead.
              </li>
              <li>
                Petrify: Cannot attack or use skills. Takes greatly reduced
                physical damage. Petrified characters count as dead characters.
              </li>
              <li>
                Curse: Receive damage worth half of the damage they just dealt.
              </li>
              <li>
                Sleep: Cannot act or dodge. If attacked, double damage is taken
                and the effect wears off.
              </li>
              <li>
                Confusion: Randomly attacks--Can hit self or party members.
                Cannot dodge or use skills.
              </li>
              <li>Paralysis: May skip a turn. In EO4 onwards, cannot dodge.</li>
              <li>Poison: Deals damage over time.</li>
              <li>Blind: Accuracy is reduced, cannot dodge.</li>
            </ul>
          </div>
        </div>
        <div className=" card-content">
          <h3 className="card__large--title">Resistance Symbols</h3>

          <div className="card__large__bottom">
            <ul>
              <h5>Normal enemies:</h5>
              <li>Double Circle: >100%</li>
              <li>Circle: 100%</li>
              <li>Triangle: &lt;100%</li>
              <li>Cross: 0% - immune</li>
            </ul>
            <ul>
              <h5>FOEs and Bosses:</h5>
              <li>Double Circle: >50%</li>
              <li>Circle: 25 - 50%</li>
              <li>Triangle: &lt;25%</li>
              <li>Cross: 0% - immune</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card card__medium">
        <img className="img__ailments" src={status} alt="status" />
        <div className="card-content">
          <h3>Ailments Symbols</h3>
          <p>
            Left to right: stun, instant-death, petrification, curse, sleep,
            panic, paralyze, poison, blind. Ailments further left have higher
            priority, so for example petrification can override curse.
          </p>
        </div>
      </div>
      <div className="card card__small">
        <div className="card-image">
          <img className="img__small" src={weaponDamage} alt="weaponDamage" />
        </div>
        <div className="card-content">
          <h3>Physical damage types</h3>
          <ul>
            <li>
              Cut: Includes edged weapons like swords and knives. Monsters using
              claws also fall within this category. Sometimes referred to as
              Slash.
            </li>
            <li>
              Stab: Includes thrusting weapons, like rapiers and spears, and
              shooting weapons, like bows and guns. Also monsters using their
              spikes for attacks, or any kind of impaling skills. Sometimes
              referred to as Pierce.
            </li>
            <li>
              Bash: Includes like hammers, staffs, fists, and any other blunt
              weapon. Oddly enough, axes are considered blunt weapons. Monsters
              may use slams or other attacks that produce an impact. Sometimes
              referred to as Strike or Crush.
            </li>
          </ul>
        </div>
      </div>
      <div className="card card__small">
        <div className="card-image ">
          <img className="img__small" src={binds} alt="binds" />
        </div>
        <div className="card-content">
          <h3>Binds</h3>
          <ul>
            <li>
              Head: Prevents skills that require the head. Reduces accuracy and
              increases damage taken by elemental attacks.
            </li>
            <li>
              Arms: Prevents skills that require the arms and cuts attack power
              in half.
            </li>
            <li>
              Legs: ind Prevents skills that require the use of the legs, dodge
              is reduced and escape is impossible. Reduces turn speed in Untold
              remakes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default StatusPage;
