import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, CardMedia } from '@mui/material';

interface Props {
  imageFiles: string[];
  handleThumbnailSelection: (index: number) => void;
}

const SelectThumbnail: React.FC<Props> = ({ imageFiles, handleThumbnailSelection }) => {
  return (
    imageFiles.length > 0 ? (
      <div>
        <p>Pasirinkite pagrindinę nuotrauką:</p>
        <Grid container spacing={2}>
          {imageFiles.map((file, index) => (
            <Grid item key={index}>
              <Card
                style={{
                  width: '100px',
                  marginRight: '10px',
                  border: index === 0 ? '2px solid blue' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleThumbnailSelection(index);
                }}
              >
                <CardMedia
  component="img"
  height="100"
  image={`data:image/jpeg;base64,${file}`}
  title={`Image ${index + 1}`}
/>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    ) : null
  );
};

export default SelectThumbnail;
