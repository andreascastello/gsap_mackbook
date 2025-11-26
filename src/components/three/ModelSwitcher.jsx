import { PresentationControls } from '@react-three/drei';
import React from 'react'
import { useRef } from 'react';
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;
const SCALE_LARGE_DESKTOP = 0.08;
const SCALE_LARGE_MOBILE = 0.05;

const fadeMeshes = (group, opacity) => {
    if(!group) return;
    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {
                opacity: opacity,
                duration: ANIMATION_DURATION,
            });
        }
    });
}

const moveGroup = (group, x) => {
    if(!group) return;
    gsap.to(group.position, {
        x: x,
        duration: ANIMATION_DURATION
    });
}
const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMackBookRef = useRef(null);
    const largeMackBookRef = useRef(null);

    const showLargeMackBook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if(showLargeMackBook) {
            moveGroup(smallMackBookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMackBookRef.current, 0);
            fadeMeshes(smallMackBookRef.current, 0);
            fadeMeshes(largeMackBookRef.current, 1);
        } else {
            moveGroup(smallMackBookRef.current, 0);
            moveGroup(largeMackBookRef.current, OFFSET_DISTANCE);
            fadeMeshes(smallMackBookRef.current, 1);
            fadeMeshes(largeMackBookRef.current, 0);
        }
    }, [scale]);
    
    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass: 1, tension: 0, friction: 26}
    }
  return (
    <>
        <PresentationControls {...controlsConfig}>
            <group ref={largeMackBookRef}>
                <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
            </group>
        </PresentationControls>
        <PresentationControls {...controlsConfig}>
            <group ref={smallMackBookRef}>
                <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
            </group>
        </PresentationControls>
    </>
  )
}

export default ModelSwitcher