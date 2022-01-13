var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
import React, { Fragment, PureComponent } from 'react'
import styled from 'react-emotion'
import fontStyles from './font-styles'
import { GreenButton } from './buttons'
var Overlay = styled('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0.8;\n'
      ],
      [
        '\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0.8;\n'
      ]
    ))
)
var Centered = styled('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n  @media (max-width: 767px) {\n    width: 80vw;\n  }\n'
      ],
      [
        '\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n  @media (max-width: 767px) {\n    width: 80vw;\n  }\n'
      ]
    ))
)
var RootCentered = styled('div')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  position: relative;\n  max-width: 500px;\n  padding: 18px;\n  padding-right: ',
        ';\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.3;\n'
      ],
      [
        '\n  ',
        ';\n  position: relative;\n  max-width: 500px;\n  padding: 18px;\n  padding-right: ',
        ';\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.3;\n'
      ]
    )),
  fontStyles,
  function(props) {
    return props.hideCloseButton ? '18px' : '40px'
  },
  function(props) {
    return props.backgroundColor
  },
  function(props) {
    return props.textColor
  }
)
var Root = styled('div')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  padding-right: ',
        ';\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n  }\n'
      ],
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  padding-right: ',
        ';\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n  }\n'
      ]
    )),
  fontStyles,
  function(props) {
    return props.hideCloseButton ? '8px' : '40px'
  },
  function(props) {
    return props.backgroundColor
  },
  function(props) {
    return props.textColor
  }
)
var Content = styled('div')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  margin-bottom: ',
        ';\n  @media (min-width: 768px) {\n    flex: auto;\n    margin-bottom: ',
        ';\n  }\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n'
      ],
      [
        '\n  margin-bottom: ',
        ';\n  @media (min-width: 768px) {\n    flex: auto;\n    margin-bottom: ',
        ';\n  }\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n'
      ]
    )),
  function(props) {
    return props.asModal ? '20px' : '8px'
  },
  function(props) {
    return props.asModal ? '20px' : '0'
  }
)
var ActionsBlock = styled('div')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  color: #000;\n  button {\n    margin: 4px 0;\n    width: 100%;\n    @media (min-width: 768px) {\n      margin: 4px 8px;\n      width: 200px;\n    }\n  }\n'
      ],
      [
        '\n  color: #000;\n  button {\n    margin: 4px 0;\n    width: 100%;\n    @media (min-width: 768px) {\n      margin: 4px 8px;\n      width: 200px;\n    }\n  }\n'
      ]
    ))
)
var P = styled('p')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n'],
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n']
    ))
)
var CloseButton = styled('button')(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        '\n  position: absolute;\n  right: 8px;\n  top: ',
        ';\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ],
      [
        '\n  position: absolute;\n  right: 8px;\n  top: ',
        ';\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ]
    )),
  function(props) {
    return props.isTop ? '20px' : '50%'
  }
)
var Banner = /** @class */ (function(_super) {
  __extends(Banner, _super)
  function Banner() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Banner.prototype.render = function() {
    var _a = this.props,
      innerRef = _a.innerRef,
      onClose = _a.onClose,
      onChangePreferences = _a.onChangePreferences,
      content = _a.content,
      subContent = _a.subContent,
      actionsBlock = _a.actionsBlock,
      backgroundColor = _a.backgroundColor,
      textColor = _a.textColor,
      onAcceptAll = _a.onAcceptAll,
      onDenyAll = _a.onDenyAll,
      hideCloseButton = _a.hideCloseButton,
      asModal = _a.asModal
    var RootContent = React.createElement(
      Fragment,
      null,
      React.createElement(
        Content,
        { asModal: asModal },
        React.createElement(P, null, content),
        React.createElement(
          P,
          null,
          React.createElement(
            'button',
            { type: 'button', onClick: onChangePreferences },
            subContent
          )
        )
      ),
      typeof actionsBlock === 'function' &&
        actionsBlock({
          acceptAll: onAcceptAll,
          denyAll: onDenyAll,
          changePreferences: onChangePreferences
        }),
      actionsBlock === true &&
        React.createElement(
          ActionsBlock,
          null,
          React.createElement(
            GreenButton,
            { type: 'button', onClick: onAcceptAll },
            '\u00C7erezleri Kabul Et'
          )
        ),
      !hideCloseButton &&
        React.createElement(
          CloseButton,
          {
            type: 'button',
            title: 'Close',
            'aria-label': 'Close',
            onClick: onClose,
            isTop: asModal
          },
          '\u2715'
        )
    )
    if (asModal) {
      return React.createElement(
        Fragment,
        null,
        React.createElement(Overlay, null),
        React.createElement(
          Centered,
          null,
          React.createElement(
            RootCentered,
            {
              innerRef: innerRef,
              backgroundColor: backgroundColor,
              textColor: textColor,
              hideCloseButton: hideCloseButton
            },
            RootContent
          )
        )
      )
    }
    return React.createElement(
      Root,
      {
        innerRef: innerRef,
        backgroundColor: backgroundColor,
        textColor: textColor,
        hideCloseButton: hideCloseButton
      },
      RootContent
    )
  }
  Banner.displayName = 'Banner'
  return Banner
})(PureComponent)
export default Banner
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQ3RELE9BQU8sTUFBTSxNQUFNLGVBQWUsQ0FBQTtBQUNsQyxPQUFPLFVBQVUsTUFBTSxlQUFlLENBQUE7QUFFdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQVl2QyxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLG1MQUFBLGdIQVE1QixJQUFBLENBQUE7QUFFRCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLHNPQUFBLG1LQVM3QixJQUFBLENBQUE7QUFFRCxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLDJRQUFXLE1BQ3pDLEVBQVUsb0ZBSUssRUFBa0QsbUJBQ3JELEVBQThCLGNBQ25DLEVBQXdCLHFFQUlsQyxLQVZHLFVBQVUsRUFJSyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBekMsQ0FBeUMsRUFDckQsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFyQixDQUFxQixFQUNuQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxTQUFTLEVBQWYsQ0FBZSxDQUlsQyxDQUFBO0FBRUQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyx1VUFBVyxNQUNqQyxFQUFVLDhEQUdLLEVBQWlELG1CQUNwRCxFQUE4QixjQUNuQyxFQUF3Qix1SkFRbEMsS0FiRyxVQUFVLEVBR0ssVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXhDLENBQXdDLEVBQ3BELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUIsRUFDbkMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWUsQ0FRbEMsQ0FBQTtBQUVELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsc1hBQWMscUJBQ3hCLEVBQXlDLHdFQUd2QyxFQUF1QyxrTkFhM0QsS0FoQmtCLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFoQyxDQUFnQyxFQUd2QyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsQ0FhM0QsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsbU9BQUEsZ0tBVWpDLElBQUEsQ0FBQTtBQUVELElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsMklBQUEsd0VBS3BCLElBQUEsQ0FBQTtBQU1ELElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsa1RBQWtCLGlEQUc3QyxFQUF1Qyw0TEFVL0MsS0FWUSxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FVL0MsQ0FBQTtBQWlCRDtJQUFvQywwQkFBb0I7SUFBeEQ7O0lBeUZBLENBQUM7SUF0RkMsdUJBQU0sR0FBTjtRQUNRLElBQUEsS0FhRixJQUFJLENBQUMsS0FBSyxFQVpaLFFBQVEsY0FBQSxFQUNSLE9BQU8sYUFBQSxFQUNQLG1CQUFtQix5QkFBQSxFQUNuQixPQUFPLGFBQUEsRUFDUCxVQUFVLGdCQUFBLEVBQ1YsWUFBWSxrQkFBQSxFQUNaLGVBQWUscUJBQUEsRUFDZixTQUFTLGVBQUEsRUFDVCxXQUFXLGlCQUFBLEVBQ1gsU0FBUyxlQUFBLEVBQ1QsZUFBZSxxQkFBQSxFQUNmLE9BQU8sYUFDSyxDQUFBO1FBRWQsSUFBTSxXQUFXLEdBQUcsQ0FDbEIsb0JBQUMsUUFBUTtZQUNQLG9CQUFDLE9BQU8sSUFBQyxPQUFPLEVBQUUsT0FBTztnQkFDdkIsb0JBQUMsQ0FBQyxRQUFFLE9BQU8sQ0FBSztnQkFDaEIsb0JBQUMsQ0FBQztvQkFDQSxnQ0FBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsSUFDL0MsVUFBVSxDQUNKLENBQ1AsQ0FDSTtZQUNULE9BQU8sWUFBWSxLQUFLLFVBQVU7Z0JBQ2pDLFlBQVksQ0FBQztvQkFDWCxTQUFTLEVBQUUsV0FBVztvQkFDdEIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLGlCQUFpQixFQUFFLG1CQUFtQjtpQkFDdkMsQ0FBQztZQUNILFlBQVksS0FBSyxJQUFJLElBQUksQ0FDeEIsb0JBQUMsWUFBWTtnQkFDWCxvQkFBQyxXQUFXLElBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsV0FBVyw4QkFFakMsQ0FNRCxDQUNoQjtZQUNBLENBQUMsZUFBZSxJQUFJLENBQ25CLG9CQUFDLFdBQVcsSUFDVixJQUFJLEVBQUMsUUFBUSxFQUNiLEtBQUssRUFBQyxPQUFPLGdCQUNGLE9BQU8sRUFDbEIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsS0FBSyxFQUFFLE9BQU8sYUFHRixDQUNmLENBQ1EsQ0FDWixDQUFBO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQ0wsb0JBQUMsUUFBUTtnQkFDUCxvQkFBQyxPQUFPLE9BQUc7Z0JBQ1gsb0JBQUMsUUFBUTtvQkFDUCxvQkFBQyxZQUFZLElBQ1gsUUFBUSxFQUFFLFFBQVEsRUFDbEIsZUFBZSxFQUFFLGVBQWUsRUFDaEMsU0FBUyxFQUFFLFNBQVMsRUFDcEIsZUFBZSxFQUFFLGVBQWUsSUFFL0IsV0FBVyxDQUNDLENBQ04sQ0FDRixDQUNaLENBQUE7U0FDRjtRQUNELE9BQU8sQ0FDTCxvQkFBQyxJQUFJLElBQ0gsUUFBUSxFQUFFLFFBQVEsRUFDbEIsZUFBZSxFQUFFLGVBQWUsRUFDaEMsU0FBUyxFQUFFLFNBQVMsRUFDcEIsZUFBZSxFQUFFLGVBQWUsSUFFL0IsV0FBVyxDQUNQLENBQ1IsQ0FBQTtJQUNILENBQUM7SUF2Rk0sa0JBQVcsR0FBRyxRQUFRLENBQUE7SUF3Ri9CLGFBQUM7Q0FBQSxBQXpGRCxDQUFvQyxhQUFhLEdBeUZoRDtlQXpGb0IsTUFBTSJ9
