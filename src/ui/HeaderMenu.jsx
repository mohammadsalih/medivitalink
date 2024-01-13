import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import Modal from "./Modal";
import { HiOutlineMagnifyingGlass, HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import SearchPatientForm from "../features/patient/SearchPatientForm";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <Modal>
          <Modal.Open opens="search-for-paitent-id">
            <ButtonIcon>
              <HiOutlineMagnifyingGlass />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="search-for-paitent-id">
            <SearchPatientForm />
          </Modal.Window>
        </Modal>
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
