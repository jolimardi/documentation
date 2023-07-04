// src/components/cssFeatures/Grid.js
import React from 'react';
import styles from './Grid.module.css';

export default function Grid(content) {
    return (
        <div className={styles['grid-preview']}>
            {content.children}
        </div>
    );
}
