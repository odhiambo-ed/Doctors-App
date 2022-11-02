# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Appointment.destroy_all
User.destroy_all
Physician.destroy_all


@user1 = User.create(username:"user1", email:"user1@gmail.com", password:"123456", password_confirmation:"123456")
@user2 = User.create(username:"user2", email:"user2@gmail.com", password:"123456", password_confirmation:"123456")
@user3 = User.create(username:"user3", email:"user3@gmail.com", password:"123456", password_confirmation:"123456")
@user4 = User.create(username:"user4", email:"user4@gmail.com", password:"123456", password_confirmation:"123456")
p "Created #{User.count} users"

@physician1 = Physician.create(name:"Patrick", bio:"Neurosurgeon", photo:"https://dims.healthgrades.com/dims3/MMH/c81d174/2147483647/strip/true/crop/3000x3000+750+0/resize/300x300!/format/webp/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2F74%2F8e%2F714c0971403d881ea7b822a4dbcf%2Fgettyimages-1205145301.jpg", specialization:"Neurosurgeon", consultation_fee:200, city:"Kigali")
@physician2 = Physician.create(name:"Edward", bio:"Neurosurgeon", photo:"https://dims.healthgrades.com/dims3/MMH/ebe8ea4/2147483647/strip/true/crop/2000x2000+0+500/resize/300x300!/format/webp/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2Faf%2F94%2F28aa622a4e479015b6068947cd3e%2Fgettyimages-626554570.jpg", specialization:"Neurosurgeon", consultation_fee:200, city:"Kigali")
@physician3 = Physician.create(name:"Mustapha", bio:"Neurosurgeon", photo:"https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2017/01/05042830/Fouad-Abbas.jpg", specialization:"Neurosurgeon", consultation_fee:200, city:"Kigali")
@physician4 = Physician.create(name:"Azeem", bio:"Neurosurgeon", photo:"https://dims.healthgrades.com/dims3/MMH/0984121/2147483647/strip/true/crop/2787x2787+407+0/resize/300x300!/format/webp/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2F13%2F34%2F63eefec84dd6b10e41907097d328%2Fgettyimages-1183027436.jpg", specialization:"Neurosurgeon", consultation_fee:200, city:"Kigali")
p "Created #{Physician.count} physicians"

@appointment1 = Appointment.create(user_id:User.first.id, physician_id:Physician.first.id, reason:"reason1", date:"2022-11-05", time:"11:00")
@appointment2 = Appointment.create(user_id:User.second.id, physician_id:Physician.second.id, reason:"reason2", date:"2022-12-07", time:"13:30")
@appointment3 = Appointment.create(user_id:User.third.id, physician_id:Physician.third.id, reason:"reason3", date:"2023-01-07", time:"09:30")
@appointment4 = Appointment.create(user_id:User.fourth.id, physician_id:Physician.fourth.id, reason:"reason4", date:"2022-12-21", time:"14:30")
p "Created #{Appointment.count} appointments"