import React from "react";

class FilmItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filmFavori: this.props.filmInfo.filmFavori,
      };
      this.handleClickFavorite = this.handleClickFavorite.bind(this);
    }
  
    handleClickFavorite() {
      const { filmFavori } = this.state;
      this.setState({
        filmFavori: !filmFavori,
      });
    }
  
    render() {
      const { filmInfo } = this.props;
      const { filmFavori } = this.state;
      return (
        <div className="container-fluid card ml-5 pt-3 pb-3 mb-3">
          <div className="row">
            <div className="col-2">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <img src={filmInfo.affiche} alt="affiche" className="img img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 card-title">
                    <h3>{filmInfo.titre}</h3>
                  </div>
                  <div className="card-body">
                    <p>{filmInfo.synopsis}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div onClick={this.handleClickFavorite} className={filmFavori ? "filmFavori" : "pasFavori"}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default FilmItem;