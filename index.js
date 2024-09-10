const pulumi = require("@pulumi/pulumi")
const aws = require("@pulumi/aws")

//create a vpc 
const vpc = new aws.ec2.vpc("my-vpc", {
    cidrBlock : "10.0.0.0/16",
    tags :{
        Name:"my-vpc"
    }
})

exports.vpcId = vpc.id


