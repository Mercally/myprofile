import React from 'react';

interface ProfileCardProps {
    name: string;
    title: string;
    description: string;
}

export function ProfileCard({ name, title, description }: ProfileCardProps) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            maxWidth: '400px',
            textAlign: 'center'
        }}>
            <h1>{name}</h1>
            <h2 style={{ color: '#666' }}>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
