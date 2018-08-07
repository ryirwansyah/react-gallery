import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  {
    src: '/media/Peta_Kontur-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Kontur"
  }, {
    src: '/media/PETA_JARINGAN_JALAN-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Jaringan Jalan"
  }, {
    src: '/media/PETA_JARINGAN_JALAN-1-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Jaringan Jalan-1"
  }, {
    src: '/media/Peta_Penutup_Lahan_3-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Penutup Lahan 3"
  }, {
    src: '/media/I-1_(PETA_1)._peta_administrasi-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Administrasi"
  }, {
    src: '/media/III-1_(PETA_2)._peta_sistem_perkotaan-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Sistem Perkotaan"
  }, {
    src: '/media/III-2_(PETA_3)._peta_pengembangan_permukiman-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Pengembangan Permukiman"
  }, {
    src: '/media/III-3_(PETA_4)._peta_pengembangan_jl_bebas_hambatan-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Pengembangan Jalan Bebas Hambatan"
  }, {
    src: '/media/III-4_(PETA_5)._peta_jaringan_transportasii-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Jaringan transportasi"
  }, {
    src: '/media/III-6_(PETA_6)._peta_rencana_struktur_ruang-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Rencana Struktur Ruang"
  }, {
    src: '/media/IV-1.a_(PETA_7)._peta_DAS-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta DAS"
  }, {
    src: '/media/IV-1.b_(PETA_8)._peta_perlindungan_kawasan_setempat-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Perlindungan Kawasan Setempat"
  }, {
    src: '/media/IV-2_(PETA_9).peta_kawasan_lindung-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Kawasan Lindung"
  }, {
    src: '/media/IV-3.(PETA_10)_peta_rawan_bencana-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Rawan Bencana"
  }, {
    src: '/media/IV-4._(PETA_11)_skema_evakuasi-min.jpg',
    width: 4,
    height: 3,
    caption: "Skema evakuasi"
  }, {
    src: '/media/IV-4._(PETA_12)_peta_sebaran_kawasan_tambang-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Sebaran Kawasan Tambang"
  }, {
    src: '/media/IV-5._(PETA_13)_peta_geologi-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta geologi"
  }, {
    src: '/media/IV-6._(PETA_14)_peta_sebaran_situs_wisata-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Sebaran Situs Wisata"
  }, {
    src: '/media/IV-7._(PETA_15)_peta_kawasan_hankam-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Kawasan Hankam "
  }, {
    src: '/media/IV-8._(PETA_16)_peta_rencana_pola_ruang-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Rencana Pola Ruang"
  }, {
    src: '/media/V-1._(PETA_17)_peta_deliniasi_KSN_&_KSK-min.jpg',
    width: 4,
    height: 3,
    caption: "Peta Deliniasi LSN & KSK"
  }, {
    src: '/media/V-2.(PETA_18)_peta_kawasan_strategis-min.jpg',
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
