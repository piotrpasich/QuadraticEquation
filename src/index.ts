// tslint:disable:no-import-side-effect prefer-template
import 'reflect-metadata'
import { Action, createExpressServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import * as cors from 'cors'
import * as _ from 'lodash'

let app: { listen: Function; options: Function; use: Function }

export function initService (): Object {
  if (!_.isUndefined(app)) {
    return app
  }

  useContainer(Container)


  return {}
}

initService()
