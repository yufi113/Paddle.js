/* eslint-disable */
/**
 * @file bilinear_interp参数文件
 * @author chenhaoze
 */
export default `
// 输入数据
const int width_shape_origin = WIDTH_SHAPE_ORIGIN;
const int height_shape_origin = HEIGHT_SHAPE_ORIGIN;
const int length_shape_origin = LENGTH_SHAPE_ORIGIN;
const int width_texture_origin = WIDTH_TEXTURE_ORIGIN;
const int height_texture_origin = HEIGHT_TEXTURE_ORIGIN;
const int channel_origin = CHANNEL_ORIGIN;
const int total_shape_origin = TOTAL_SHAPE_ORIGIN;
const int total_shape_out = TOTAL_SHAPE_OUT;
// 输入数据
 uniform sampler2D texture_origin;
`;
