import React from 'react'
import { CampusCard, CampusCity, CampusContainer, CampusH1, CampusImg, CampusLi, CampusSubtitle, CampusTitle, CampusUl, CampusWrapper } from './CampusElements.js'

const Campus = () => {
    return (
        <>
            <CampusContainer>
                <CampusWrapper>
                    <CampusCard>
                        <CampusTitle>Nos campus</CampusTitle>
                        <CampusH1>Nos centres de formations professionnelles</CampusH1>
                        <CampusSubtitle>Quinze campus répartis en France et à l’international pour devenir développeur web</CampusSubtitle>
                        <CampusUl>
                            <CampusLi>
                                <CampusCity>Casablanca</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Marseille</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Bordeaux</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Lyon</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Paris</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Rabat</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Nantes</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Strasbourg</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Monaco</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Nice</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Rennes</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Grenoble</CampusCity>
                            </CampusLi>
                            <CampusLi>
                                <CampusCity>Tunis</CampusCity>
                            </CampusLi>
                        </CampusUl>
                    </CampusCard>
                    <CampusCard>
                        <CampusImg/>
                    </CampusCard>
                </CampusWrapper>
            </CampusContainer>
        </>
    )
}

export default Campus
