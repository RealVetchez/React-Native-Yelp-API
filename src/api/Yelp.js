import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer UdWJcFDubsV9asXRMlwxKjNGL_j2AhbRL0dRfBrMsztFcDpl4IPcx5pp61aVe6RhGYzvOT-qQ08BbsYYgUkvP_nOTSI3kIrTZct4OUrScQ_mAe3cgcWYksGDepRnYnYx',
	},
});
