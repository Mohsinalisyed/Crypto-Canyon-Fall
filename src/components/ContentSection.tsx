import React from 'react';
import styled from 'styled-components';
import { Container, TextH3 as OriginalTextH3, Desc as OriginalDesc } from '../lib';

interface Iprops {
    about?: string;
    aboutLine2?: string;
    aboutLine3?: string;
    updated_on?: string;
    data_saftey?: string;
}

const ContentSection: React.FC<Iprops> = ({ about, updated_on, data_saftey, aboutLine2, aboutLine3 }) => {
    return (
        <StyledContainer>
            <StyledTextH3>About this app</StyledTextH3>
            {about ? <StyledDesc>{about} </StyledDesc> : <StyledDesc>
                Introducing Crypto Canyon Fall:
                A thrilling adventure where you can not only experience the adrenaline-pumping excitement of down treacherous.
                <br />
                Get ready to embark on an epic journey through challenging canyons, filled with obstacles.
                Test your reflexes and precision as you navigate through narrow pathways, avoiding dangerous pitfalls and collecting valuable rewards along the way.
                Each level presents a unique set of challenges that will push your skills to the limit.
            </StyledDesc>}
            {aboutLine2 && <StyledDesc>{aboutLine2}</StyledDesc>}
            {aboutLine3 && <StyledDesc>{aboutLine3}</StyledDesc>}
            <StyledUpdatedInfo>
                <StyledH4>Updated on</StyledH4>
                <StyledDesc>{updated_on ? updated_on : 'Jun 27, 2024'}</StyledDesc>
            </StyledUpdatedInfo>
            <StyledDataSafety>
                <StyledTextH3>Data safety</StyledTextH3>
                <StyledDesc>
                    {data_saftey ? data_saftey : ' Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.'}
                </StyledDesc>
            </StyledDataSafety>
        </StyledContainer>
    );
};

export default ContentSection;

// Styled Components

const StyledContainer = styled(Container)`
    margin-top: 32px;
`;

const StyledTextH3 = styled(OriginalTextH3)`
    margin-top: 0;
`;

const StyledDesc = styled(OriginalDesc)`
    padding-top: 8px;
`;

const StyledUpdatedInfo = styled.div`
    padding-top: 24px;
    font-weight: 600;
`;

const StyledH4 = styled.h4`
    margin-bottom: 6px;
`;

const StyledDataSafety = styled.div`
    margin-top: 32px;
`;

