import * as React from 'react'

export default function NumericPad({children}) {
    return <div style={styles.Container}> {children}</div>
};

const styles = {
    Container: {
        width: 265,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "grey",
        }
}