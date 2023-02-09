import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, body } = props;

    return (
        <div className="novedades">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;