import React from 'react';
import styled from 'styled-components';
import { Container, Desc } from '../lib';


const FooterImage = styled.img`
  padding-right: 8px;
`;

const FooterLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #5f6368;
`;

const FooterSection = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterItem>
                    <FooterImage src="https://bc91231.com/googleplay/imgs/share.svg" alt="" />
                    <div>
                        <Desc>No data shared with third parties</Desc>
                        <FooterLink href="###"><u>Learn more</u> about how developers declare sharing</FooterLink>
                    </div>
                </FooterItem>
                <FooterItem>
                    <FooterImage src="https://bc91231.com/googleplay/imgs/up.svg" alt="" />
                    <div>
                        <Desc>No data collected</Desc>
                        <FooterLink href="###"><u>Learn more</u> about how developers declare collection</FooterLink>
                    </div>
                </FooterItem>
                <FooterItem>
                    <FooterImage src="https://bc91231.com/googleplay/imgs/lock.svg" alt="" />
                    <Desc>Data is encrypted in transit</Desc>
                </FooterItem>
                <FooterItem>
                    <FooterImage src="https://bc91231.com/googleplay/imgs/delete.svg" alt="" />
                    <Desc>Data can’t be deleted</Desc>
                </FooterItem>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default FooterSection;

const FooterContainer = styled(Container)`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const FooterWrapper = styled.div`
   border: #202124 solid 1px;
  padding: 16px;
  border-radius: 8px;
`;

const FooterItem = styled.div`
    padding-bottom: 16px;
  display: flex;
  align-items: center;`
