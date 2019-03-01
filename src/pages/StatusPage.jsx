import React from "react";
import infoScreen from "../images/infoScreen.jpg";

const StatusPage = () => (
  <div>
    <img src={infoScreen} alt="info-screen" />
    <h3>Ailments Symbols</h3>
    <p>
      from left to right: The two on the far left are stun and instant-death.
      After that, there's petrification, curse, sleep, panic, paralyze, poison,
      blind. Ailments further left have priority, so petrify will overwrite
      blind.
    </p>
    <h3>Resistance Symbols</h3>
    <p>
      Normal enemies Double Circle: over 100% Circle: 100% Triangle: under 100%
      Cross: 0% - immune FOEs and Bosses Double Circle: over 50% Circle: 25 -
      50% Triangle: under 25% Cross: 0% (immune)
    </p>
    <h3>Ailments</h3>
    <ul>
      <li>Stun: Cannot act or dodge for the rest of this turn.</li>
      <li>
        Instant Death: When HP reaches 0, or inflicted by certain skills. Cannot
        attack, use skills, or receive damage. The party loses if all members
        are dead.
      </li>
      <li>
        Petrify: Cannot attack or use skills. Takes greatly reduced physical
        damage. Petrified characters count as dead characters.
      </li>
      <li>Curse: Receive damage worth half of the damage they just dealt.</li>
      <li>
        Sleep: Cannot act or dodge. If attacked, double damage is taken and the
        effect wears off.
      </li>
      <li>
        Confusion: Randomly attacks--Can hit self or party members. Cannot dodge
        or use skills.
      </li>
      <li>Paralysis: May skip a turn. In EO4 onwards, cannot dodge.</li>
      <li>Poison: Deals damage over time.</li>
      <li>Blind: Accuracy is reduced, cannot dodge.</li>
    </ul>
    <h3>Physical damage types</h3>
    <ul>
      <li>
        Cut: Includes edged weapons like swords and knives. Monsters using claws
        also fall within this category. Sometimes referred to as Slash.
      </li>
      <li>
        Stab: Includes thrusting weapons, like rapiers and spears, and shooting
        weapons, like bows and guns. Also monsters using their spikes for
        attacks, or any kind of impaling skills. Sometimes referred to as
        Pierce.
      </li>
      <li>
        Bash: Includes like hammers, staffs, fists, and any other blunt weapon.
        Oddly enough, axes are considered blunt weapons. Monsters may use slams
        or other attacks that produce an impact. Sometimes referred to as Strike
        or Crush.
      </li>
    </ul>
    <h3>Binds</h3>
    <ul>
      <li>
        Head: Prevents skills that require the head. Reduces accuracy and
        increases damage taken by elemental attacks.
      </li>
      <li>
        Arms: Prevents skills that require the arms and cuts attack power in
        half.
      </li>
      <li>
        Legs: ind Prevents skills that require the use of the legs, dodge is
        reduced and escape is impossible. Reduces turn speed in Untold remakes.
      </li>
    </ul>
  </div>
);

export default StatusPage;
