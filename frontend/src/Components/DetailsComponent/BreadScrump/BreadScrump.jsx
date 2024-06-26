import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
    return (
        <div className="breadcrumb">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && ' > '}
                    {item.path ? (
                        <Link to={item.path}>{item.label}</Link>
                    ) : (
                        item.label
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Breadcrumb;
