import AosModule from './modules/AosModule.js';
import CartModule from './modules/CartModule.js';
import FormatPhoneNumber from './modules/FormatPhoneNumber.js';
import HeaderDropdownModule from './modules/HeaderDropdownModule.js';
import HeaderFixedModule from './modules/HeaderFixedModule.js';
import HeaderModule from './modules/HeaderModule.js';
import LightGalleryModule from './modules/LightGalleryModule.js';
import LoadingModule from './modules/LoadingModule.js';
import MfpModule from './modules/MfpModule.js';
import ProductModule from './modules/ProductModule.js';
import ScrollToTopModule from './modules/ScrollToTopModule.js';
import Select2Module from './modules/Select2Module.js';
import SwiperModule from './modules/SwiperModule.js';
import TabModule from './modules/TabModule.js';
import ViewportModule from './modules/ViewportModule.js';

jQuery(document).ready(function ($) {
	LoadingModule(AosModule);
	HeaderModule();
	HeaderDropdownModule();
	HeaderFixedModule();
	LightGalleryModule();
	MfpModule();
	SwiperModule();
	TabModule();
	ScrollToTopModule();
	ViewportModule();
	Select2Module();
	FormatPhoneNumber();
	ProductModule();
	CartModule();
});
