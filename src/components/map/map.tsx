import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';
import { OfferPreview, OfferLocation } from '../../types';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import useMap from '../../hooks/use-map';

type MapProps = {
  startPosition: OfferLocation;
  offers: OfferPreview[];
  className: string;
  activeOffer: OfferPreview | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

function Map({ startPosition, offers, activeOffer, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, startPosition);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offerPreview) => {
        const hoverMarker = new Marker({
          lat: offerPreview.location.latitude,
          lng: offerPreview.location.longitude,
        });
        hoverMarker
          .setIcon(
            activeOffer !== null && offerPreview.id === activeOffer.id
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      if (activeOffer !== null) {
        const currentMarker = new Marker({
          lat: activeOffer.location.latitude,
          lng: activeOffer.location.longitude,
        });
        currentMarker
          .setIcon(activeCustomIcon)
          .addTo(markerLayer);
      }

      map.setView({
        lat: startPosition.latitude,
        lng: startPosition.longitude,
      }, startPosition.zoom);

      return () => {
        map.removeLayer(markerLayer);

      };
    }
  }, [map, offers, activeOffer, startPosition]);

  return <section className={cn('map', className)} ref={mapRef}></section>;
}

export default Map;
