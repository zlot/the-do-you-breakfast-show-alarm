export function insertMixcloudWidget(link) {

  // Wrangle link into widget api format
  let widgetFormattedLink = 'https://www.mixcloud.com/widget/iframe/?feed=' + encodeURIComponent(link) + '&amp;hide_cover=1&amp;light=1'

  let iframe = document.createElement('iframe')
  iframe.id = 'mixcloud-widget'
  iframe.width = '100%'
  iframe.height = '120'
  iframe.src = widgetFormattedLink

  document.body.appendChild(iframe)
  let widget = Mixcloud.PlayerWidget(iframe)

  return widget

}
