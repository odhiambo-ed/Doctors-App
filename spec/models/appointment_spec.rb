require 'rails_helper'

RSpec.describe Appointment, type: :model do
  describe 'Tests for Appointment model validation ' do
    @first_user = User.create(username: 'Ali')
    @first_physician = Physician.create(name: 'Hello', bio: 'This is my first bio', city: 'test city',
                                        specialization: 'test specialization', consultation_fee: 200, photo: 'https://dims.healthgrades.com/dims3/MMH/c81d174/2147483647/strip/true/crop/3000x3000+750+0/resize/300x300!/format/webp/quality/75/?url=https%3A%2F%2Fucmscdn.healthgrades.com%2F74%2F8e%2F714c0971403d881ea7b822a4dbcf%2Fgettyimages-1205145301.jpg')
    subject do
      Appointment.new(user: @first_user, physician: @first_physician, reason: 'reason test', date: '2022-12-02',
                      time: '11:00')
    end
    before { subject.save }

    it 'reason should not be nil' do
      subject.reason = nil
      expect(subject).to_not be_valid
    end
    it 'time should not be less than 0' do
      subject.date = nil
      expect(subject).to_not be_valid
    end
    it 'reason should be 4' do
      subject.time = nil
      expect(subject).to_not be_valid
    end
  end
end
