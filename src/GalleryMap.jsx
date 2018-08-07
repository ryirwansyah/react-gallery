import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  {
    src: '/media/Peta Kontur.jpg',
    width: 4,
    height: 3,
    caption: "Peta Kontur"
  }, {
    src: '/media/PETA JARINGAN JALAN.jpg',
    width: 4,
    height: 3,
    caption: "Peta Jaringan Jalan"
  }, {
    src: '/media/PETA JARINGAN JALAN-1.jpg',
    width: 4,
    height: 3,
    caption: "Peta Jaringan Jalan-1"
  }, {
    src: '/media/I-1 (PETA 1). peta administrasi.jpg',
    width: 4,
    height: 3,
    caption: "Peta Administrasi"
  }, {
    src: '/media/III-1 (PETA 2). peta sistem perkotaan.jpg',
    width: 4,
    height: 3,
    caption: "Peta Sistem Perkotaan"
  }, {
    src: '/media/III-2 (PETA 3). peta pengembangan permukiman.jpg',
    width: 4,
    height: 3,
    caption: "Peta Pengembangan Permukiman"
  }, {
    src: '/media/III-3 (PETA 4). peta pengembangan jl bebas hambatan.jpg',
    width: 4,
    height: 3,
    caption: "Peta Pengembangan Jalan Bebas Hambatan"
  }, {
    src: '/media/III-4 (PETA 5). peta jaringan transportasii.jpg',
    width: 4,
    height: 3,
    caption: "Peta Jaringan transportasi"
  }, {
    src: '/media/III-6 (PETA 6). peta rencana struktur ruang.jpg',
    width: 4,
    height: 3,
    caption: "Peta Rencana Struktur Ruang"
  }, {
    src: '/media/IV-1.a (PETA 7). peta DAS.jpg',
    width: 4,
    height: 3,
    caption: "Peta DAS"
  }, {
    src: '/media/IV-1.b (PETA 8). peta perlindungan kawasan setempat.jpg',
    width: 4,
    height: 3,
    caption: "Peta Perlindungan Kawasan Setempat"
  }, {
    src: '/media/IV-2 (PETA 9).peta kawasan lindung.jpg',
    width: 4,
    height: 3,
    caption: "Peta Kawasan Lindung"
  }, {
    src: '/media/IV-3.(PETA 10) peta rawan bencana.jpg',
    width: 4,
    height: 3,
    caption: "Peta Rawan Bencana"
  }, {
    src: '/media/IV-4.   (PETA 11) skema evakuasi.jpg',
    width: 4,
    height: 3,
    caption: "Skema evakuasi"
  }, {
    src: '/media/IV-4. (PETA 12) peta sebaran kawasan tambang.jpg',
    width: 4,
    height: 3,
    caption: "Peta Sebaran Kawasan Tambang"
  }, {
    src: '/media/IV-5. (PETA 13) peta geologi.jpg',
    width: 4,
    height: 3,
    caption: "Peta geologi"
  }, {
    src: '/media/IV-6. (PETA 14) peta sebaran situs wisata.jpg',
    width: 4,
    height: 3,
    caption: "Peta Sebaran Situs Wisata"
  }, {
    src: '/media/IV-7. (PETA 15) peta kawasan hankam.jpg',
    width: 4,
    height: 3,
    caption: "Peta Kawasan Hankam "
  }, {
    src: '/media/IV-8. (PETA 16) peta rencana pola ruang.jpg',
    width: 4,
    height: 3,
    caption: "Peta Rencana Pola Ruang"
  }, {
    src: '/media/V-1. (PETA 17) peta deliniasi KSN & KSK.jpg',
    width: 4,
    height: 3,
    caption: "Peta Deliniasi LSN & KSK"
  }, {
    src: '/media/V-2.(PETA 18) peta kawasan strategis.jpg',
    width: 4,
    height: 3,
    caption: "Peta Kawasan Strategis"
  }
];


class GalleryMap extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <div className="container">
        <div className="row" style={{marginTop:"30px"}}>
            <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="gallery-title">Peta Analisis</h1>
            </div>
          </div>
          <Gallery photos={photos.slice(0,4)} onClick={this.openLightbox} />
          <div className="row" style={{marginTop:"30px"}}>
            <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="gallery-title">Peta Rt/Rw</h1>
            </div>
          </div>
          <Gallery photos={photos.slice(5,22)} onClick={this.openLightbox} />
        </div>
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default GalleryMap;
