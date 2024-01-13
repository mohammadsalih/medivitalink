import {
  HiOutlineClipboardDocumentList,
  HiOutlineHeart,
  HiOutlineClipboardDocumentCheck,
  HiOutlineTruck,
} from "react-icons/hi2";
import Stat from "./Stat";

function Stats() {
  // 1.
  const numBookings = 1455;

  // 2.
  const sales = 190;

  // 3.
  const checkins = 200;

  // 4.
  const occupation = 45;
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="Total patient"
        color="blue"
        icon={<HiOutlineHeart />}
        value={numBookings}
      />
      <Stat
        title="Admission Today"
        color="green"
        icon={<HiOutlineClipboardDocumentList />}
        value={sales}
      />
      <Stat
        title="Discharges Today"
        color="indigo"
        icon={<HiOutlineClipboardDocumentCheck />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineTruck />}
        value={occupation}
      />
    </>
  );
}

export default Stats;
