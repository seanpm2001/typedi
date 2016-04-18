import {Container} from "../../src/typedi";
import {CarFactory} from "./CarFactory";
import {EngineFactory} from "./EngineFactory";
import {BodyFactory} from "./BodyFactory";
import {WheelFactory} from "./WheelFactory";

// we need to import all services we need to make sure they are injected properly

import "./BodyFactory";
import "./WheelFactory";
import "./EngineFactory";
import "./CarFactory";

// setup services

let bodyFactory = Container.get<BodyFactory>("body.factory");
bodyFactory.color = 333;

let wheelFactory = Container.get<WheelFactory>("wheel.factory");
wheelFactory.size = 20;

let engineFactory = Container.get<EngineFactory>("engine.factory");
engineFactory.setSeries("3000");

// create a car using car factory

let carFactory = Container.get<CarFactory>("car.factory");
carFactory.create();