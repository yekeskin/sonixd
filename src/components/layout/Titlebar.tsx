import React, { useEffect, useState } from 'react';
import {
  TitleHeader,
  DragRegion,
  WindowControl,
  WindowControlButton,
} from './styled';

const Titlebar = () => {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    // We are using an interval to set the title instead of redux because jest
    // throws an error on render that this component is not wrapped in a redux provider.
    // Not sure if this is a bug or not, but this is the only workaround unless
    // someone knows of a better solution.
    setInterval(() => setTitle(document.title), 1000);
  });

  return (
    <TitleHeader id="titlebar">
      <DragRegion id="drag-region">
        <div
          id="window-title"
          style={{
            width: 'calc(80%)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <span>{title}</span>
        </div>
        <WindowControl id="window-controls">
          <WindowControlButton minButton className="button" id="min-button">
            <img
              className="icon"
              srcSet="img/icons/min-w-10.png 1x, img/icons/min-w-12.png 1.25x, img/icons/min-w-15.png 1.5x, img/icons/min-w-15.png 1.75x, img/icons/min-w-20.png 2x, img/icons/min-w-20.png 2.25x, img/icons/min-w-24.png 2.5x, img/icons/min-w-30.png 3x, img/icons/min-w-30.png 3.5x"
              draggable="false"
              alt=""
            />
          </WindowControlButton>
          <WindowControlButton maxButton className="button" id="max-button">
            <img
              className="icon"
              srcSet="img/icons/max-w-10.png 1x, img/icons/max-w-12.png 1.25x, img/icons/max-w-15.png 1.5x, img/icons/max-w-15.png 1.75x, img/icons/max-w-20.png 2x, img/icons/max-w-20.png 2.25x, img/icons/max-w-24.png 2.5x, img/icons/max-w-30.png 3x, img/icons/max-w-30.png 3.5x"
              draggable="false"
              alt=""
            />
          </WindowControlButton>
          <WindowControlButton
            restoreButton
            className="button"
            id="restore-button"
          >
            <img
              className="icon"
              srcSet="img/icons/restore-w-10.png 1x, img/icons/restore-w-12.png 1.25x, img/icons/restore-w-15.png 1.5x, img/icons/restore-w-15.png 1.75x, img/icons/restore-w-20.png 2x, img/icons/restore-w-20.png 2.25x, img/icons/restore-w-24.png 2.5x, img/icons/restore-w-30.png 3x, img/icons/restore-w-30.png 3.5x"
              draggable="false"
              alt=""
            />
          </WindowControlButton>
          <WindowControlButton className="button" id="close-button">
            <img
              className="icon"
              srcSet="img/icons/close-w-10.png 1x, img/icons/close-w-12.png 1.25x, img/icons/close-w-15.png 1.5x, img/icons/close-w-15.png 1.75x, img/icons/close-w-20.png 2x, img/icons/close-w-20.png 2.25x, img/icons/close-w-24.png 2.5x, img/icons/close-w-30.png 3x, img/icons/close-w-30.png 3.5x"
              draggable="false"
              alt=""
            />
          </WindowControlButton>
        </WindowControl>
      </DragRegion>
    </TitleHeader>
  );
};

export default Titlebar;
