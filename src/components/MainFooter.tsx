import React from 'react';
import styled from 'styled-components';
import { Container } from '../lib';

// Styled components for MainFooter
const StyledContainer = styled(Container)`
    padding-top: 200px;
`;

const Divider = styled.div`
    border-top: 1px solid grey;
    margin-top: 16px;
`;

const SectionWrapper = styled.div`
    margin: 32px 0;
    display: flex;
`;

const Section = styled.div`
    margin-right: 100px;
    color: rgb(95, 99, 104);
    font-size: 14px;
`;

const SectionTitle = styled.strong`
    font-weight: bold;
`;

const ListItem = styled.div`
    padding: 10px 0;
    font-weight: 400;
`;

const MainFooter = () => {
    // Define the lists of items
    const googlePlayItems = [
        'Play Pass',
        'Play Points',
        'Gift cards',
        'Redeem',
        'Refund policy'
    ];

    const kidsFamilyItems = [
        'Parent Guide',
        'Family sharing'
    ];

    return (
        <StyledContainer>
            <Divider />
            <SectionWrapper>
                {/* Google Play section */}
                <Section>
                    <SectionTitle>Google Play</SectionTitle>
                    {googlePlayItems.map((item, index) => (
                        <ListItem key={index}>
                            {item}
                        </ListItem>
                    ))}
                </Section>
                {/* Kids & Family section */}
                <Section>
                    <SectionTitle>Kids & family</SectionTitle>
                    {kidsFamilyItems.map((item, index) => (
                        <ListItem key={index}>
                            {item}
                        </ListItem>
                    ))}
                </Section>
            </SectionWrapper>
        </StyledContainer>
    );
};

export default MainFooter;
