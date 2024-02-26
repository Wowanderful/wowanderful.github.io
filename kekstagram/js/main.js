// import {showAlert, debounce} from './utils.js';
// import {getData} from './api.js';
import {renderGallery} from './modal-bigphoto.js';
import {setUserPhotoSubmit, closeUserPhotoSubmit} from './load-picture.js';
// import {initiate, sortPictures} from './filters.js';
import {drawPictures} from './moc.js'

setUserPhotoSubmit(closeUserPhotoSubmit);

renderGallery(drawPictures());

