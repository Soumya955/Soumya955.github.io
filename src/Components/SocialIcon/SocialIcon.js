import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import styled from "styled-components";

export const SocialDiv = styled.div`
  margin-top: 2rem;
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  a {
    font-size: 2.5rem;
    color: #151418;
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  .item + .item {
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/soumyaranjan-badajena-45868421b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/Soumya955"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
