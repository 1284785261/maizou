const host = 'https://mainsite-restapi.ele.me';

const imgHost = 'https://fuss10.elemecdn.com';

//首页接口api
//定位
//参数： latitude longitude
const geo = '/bgs/poi/reverse_geo_coding'; 

//天气
//参数： latitude longitude
const weather = '/bgs/weather/current';

//热门词
//参数： latitude longitude
const hotwords = '/shopping/v3/hot_search_words';

//详情数据
const listw = '/shopping/v2/menu';

//热门小词?offset=0&limit=20&keyword=%E5%88%BA%E8%BA%AB&latitude=22.62852968182&longitude=113.83256145931&search_item_type=2&extra[]=activities
const hotwordss = '/shopping/v1/restaurants/search';



//轮播
//参数： latitude longitude  templates[]=main_template
const banner = '/shopping/v2/entries';


//轮播跳转 &keyword=&offset=0
const bannerlist = '/shopping/restaurants';
//?latitude=22.62855022591&longitude=113.83250730007

//列表
//轮播
//参数： latitude longitude  offset  limit
const list = '/shopping/restaurants';

//热门搜索
const search = '/shopping/v3/hot_search_words';

//搜索跳转
const sousuo = '/shopping/v1/restaurants/search';


//商家信息详情
const detail = '/shopping/restaurant';
export default {
	geoApi: host+geo,
	weatherApi: host+weather,
	hotwordsApi: host+hotwords,
	bannerApi: host+banner,
	listApi: host+list,
	imgHost,
	searchApi:host+search,
	detailApi:host+detail,
	bannerlistApi:host+bannerlist,
	sousuoApi:host+sousuo,
	hostsApi:host+hotwordss,
	listwApi:host+listw
}
