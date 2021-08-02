import * as React from 'react'
import Layout from '../components/layout'

import {
  Container,
  ReaderContainer,
} from "../components/epub.components";
import ReactReader from '../modules/ReactReader/ReactReader';


const storage = global.localStorage || null;

const BookToReadPage = (props) => {
    const DEMO_NAME = new URLSearchParams(props.location.search).get("name");
    const DEMO_URL = new URLSearchParams(props.location.search).get("pub");

    const [fullscreen, setFullscreen] = React.useState(false);
    const [location, setLocation] = React.useState(
        storage && storage.getItem("epub-location")
        ? storage.getItem("epub-location")
        : 2
    );
    const [localFile, setLocalFile] = React.useState(null);
    const [localName, setLocalName] = React.useState(null);

    const onLocationChanged = curLocation => {
        setLocation(curLocation, () => {
            storage && storage.setItem("epub-location", location);
        });
    };

    return (
        <Layout>
            <Container>
                <ReaderContainer>
                    <ReactReader
                        url={localFile || DEMO_URL}
                        title={localName || DEMO_NAME}
                        location={location}
                        locationChanged={onLocationChanged}
                    />
                </ReaderContainer>
            </Container>
        </Layout>
    );
}

export default BookToReadPage